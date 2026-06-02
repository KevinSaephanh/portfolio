'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── constants ─────────────────────────────────────────────────────────────────
const CW = 450;
const CH = 500;
const TILE_SIZE = 32;
const COLS = 13;
const ROWS = 14;
const GRID_OFFSET_X = 17;
const GRID_OFFSET_Y = 16;
const ENEMY_TICK = 600;

const PLAYER_START: Position = { col: 1, row: ROWS - 2 };
const EXIT_POS: Position = { col: COLS - 2, row: 1 };

const ENEMY_TYPES = [
  { name: 'HOLLOW',   color: '#BF5FFF', hp: 3, atk: 1 },
  { name: 'TITAN',    color: '#FF2D78', hp: 5, atk: 2 },
  { name: 'AKATSUKI', color: '#FF2D78', hp: 4, atk: 1 },
  { name: 'NOMU',     color: '#BF5FFF', hp: 6, atk: 2 },
  { name: 'ESPADA',   color: '#2dd4bf', hp: 4, atk: 2 },
  { name: 'APOSTLE',  color: '#BF5FFF', hp: 3, atk: 1 },
];

// ─── types ─────────────────────────────────────────────────────────────────────
type TileKind = 'floor' | 'wall';
interface Tile { kind: TileKind }
interface Position { col: number; row: number }
interface Player { pos: Position; hp: number; maxHp: number; atk: number }
interface Enemy {
  id: number;
  pos: Position;
  hp: number;
  maxHp: number;
  atk: number;
  name: string;
  color: string;
  moveTimer: number;
  dead: boolean;
}
type Phase = 'playing' | 'gameover';
interface GS {
  grid: Tile[];
  player: Player;
  enemies: Enemy[];
  phase: Phase;
  floor: number;
  kills: number;
  exitOpen: boolean;
  pendingFloor: boolean;
  lastTime: number | null;
}

// ─── helpers ───────────────────────────────────────────────────────────────────
function idx(col: number, row: number): number {
  return row * COLS + col;
}

function posEq(a: Position, b: Position): boolean {
  return a.col === b.col && a.row === b.row;
}

function sign(n: number): number {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}

// ─── dungeon generation ────────────────────────────────────────────────────────
let enemyIdCounter = 0;

function makeFloor(floor: number): { grid: Tile[]; enemies: Enemy[]; playerStart: Position } {
  const grid: Tile[] = Array.from({ length: ROWS * COLS }, () => ({ kind: 'wall' as TileKind }));

  // Carve interior
  for (let r = 1; r <= ROWS - 2; r++) {
    for (let c = 1; c <= COLS - 2; c++) {
      grid[idx(c, r)] = { kind: 'floor' };
    }
  }

  // Add random wall obstacles (avoid player start area within 2 cells)
  const obstacleCount = Math.min(6 + floor, 18);
  let placed = 0;
  let attempts = 0;
  while (placed < obstacleCount && attempts < 500) {
    attempts++;
    const c = 1 + Math.floor(Math.random() * (COLS - 2));
    const r = 1 + Math.floor(Math.random() * (ROWS - 2));
    // Avoid player start area
    if (Math.abs(c - PLAYER_START.col) <= 2 && Math.abs(r - PLAYER_START.row) <= 2) continue;
    // Avoid exit pos
    if (c === EXIT_POS.col && r === EXIT_POS.row) continue;
    if (grid[idx(c, r)].kind === 'floor') {
      grid[idx(c, r)] = { kind: 'wall' };
      placed++;
    }
  }

  // Spawn enemies
  const enemyCount = Math.min(3 + floor * 2, 12);
  const enemies: Enemy[] = [];
  let eAttempts = 0;
  while (enemies.length < enemyCount && eAttempts < 1000) {
    eAttempts++;
    const c = 1 + Math.floor(Math.random() * (COLS - 2));
    const r = 1 + Math.floor(Math.random() * (ROWS - 2));
    const pos = { col: c, row: r };
    if (grid[idx(c, r)].kind !== 'floor') continue;
    // Avoid player start 2-cell radius
    if (Math.abs(c - PLAYER_START.col) <= 2 && Math.abs(r - PLAYER_START.row) <= 2) continue;
    if (posEq(pos, EXIT_POS)) continue;
    if (enemies.some(e => posEq(e.pos, pos))) continue;

    const type = ENEMY_TYPES[Math.floor(Math.random() * ENEMY_TYPES.length)];
    const hpBonus = Math.floor(floor / 3);
    const atkBonus = Math.floor(floor / 5);
    const hp = type.hp + hpBonus;
    enemies.push({
      id: ++enemyIdCounter,
      pos,
      hp,
      maxHp: hp,
      atk: type.atk + atkBonus,
      name: type.name,
      color: type.color,
      moveTimer: Math.random() * ENEMY_TICK, // stagger initial timers
      dead: false,
    });
  }

  return { grid, enemies, playerStart: { ...PLAYER_START } };
}

// ─── initial GS ────────────────────────────────────────────────────────────────
function makeGS(): GS {
  const { grid, enemies, playerStart } = makeFloor(1);
  return {
    grid,
    player: { pos: playerStart, hp: 10, maxHp: 10, atk: 1 },
    enemies,
    phase: 'playing',
    floor: 1,
    kills: 0,
    exitOpen: false,
    pendingFloor: false,
    lastTime: null,
  };
}

// ─── player move ───────────────────────────────────────────────────────────────
const DIRS: Record<string, [number, number]> = {
  ArrowUp: [0, -1], w: [0, -1],
  ArrowDown: [0, 1], s: [0, 1],
  ArrowLeft: [-1, 0], a: [-1, 0],
  ArrowRight: [1, 0], d: [1, 0],
};

function handlePlayerMove(g: GS, key: string) {
  const dir = DIRS[key];
  if (!dir) return;
  const [dc, dr] = dir;
  const { player } = g;
  const target: Position = { col: player.pos.col + dc, row: player.pos.row + dr };

  // Out of bounds
  if (target.col < 0 || target.col >= COLS || target.row < 0 || target.row >= ROWS) return;

  // Wall
  if (g.grid[idx(target.col, target.row)].kind === 'wall') return;

  // Enemy at target?
  const enemy = g.enemies.find(e => !e.dead && posEq(e.pos, target));
  if (enemy) {
    enemy.hp -= player.atk;
    if (enemy.hp <= 0) {
      enemy.dead = true;
      g.kills++;
      // Check if all dead → open exit
      if (g.enemies.every(e => e.dead)) {
        g.exitOpen = true;
      }
    }
    return;
  }

  // Exit?
  if (g.exitOpen && posEq(target, EXIT_POS)) {
    g.pendingFloor = true;
    return;
  }

  // Move
  player.pos = target;
}

// ─── enemy AI ──────────────────────────────────────────────────────────────────
function tryEnemyMove(g: GS, e: Enemy) {
  const { player } = g;
  const dc = sign(player.pos.col - e.pos.col);
  const dr = sign(player.pos.row - e.pos.row);

  // Determine primary vs fallback axis
  const colDist = Math.abs(player.pos.col - e.pos.col);
  const rowDist = Math.abs(player.pos.row - e.pos.row);

  const dirs: [number, number][] = [];
  if (colDist >= rowDist) {
    dirs.push([dc, 0], [0, dr]);
  } else {
    dirs.push([0, dr], [dc, 0]);
  }
  // Also add diagonal fallback directions
  if (dc !== 0) dirs.push([dc, 0]);
  if (dr !== 0) dirs.push([0, dr]);

  for (const [moveC, moveR] of dirs) {
    if (moveC === 0 && moveR === 0) continue;
    const target: Position = { col: e.pos.col + moveC, row: e.pos.row + moveR };

    if (target.col < 0 || target.col >= COLS || target.row < 0 || target.row >= ROWS) continue;
    if (g.grid[idx(target.col, target.row)].kind === 'wall') continue;

    // Attack player
    if (posEq(target, player.pos)) {
      player.hp -= e.atk;
      if (player.hp <= 0) {
        player.hp = 0;
        g.phase = 'gameover';
      }
      return;
    }

    // Check no other living enemy occupies target
    if (g.enemies.some(other => other.id !== e.id && !other.dead && posEq(other.pos, target))) continue;

    // Move
    e.pos = target;
    return;
  }
}

// ─── draw ──────────────────────────────────────────────────────────────────────
function draw(ctx: CanvasRenderingContext2D, g: GS) {
  // Background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, CW, CH);

  // Scanlines
  ctx.fillStyle = 'rgba(45,212,191,0.025)';
  for (let y = 0; y < CH; y += 4) ctx.fillRect(0, y, CW, 1);

  // Tiles
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const tile = g.grid[idx(c, r)];
      const x = GRID_OFFSET_X + c * TILE_SIZE;
      const y = GRID_OFFSET_Y + r * TILE_SIZE;

      if (tile.kind === 'wall') {
        ctx.fillStyle = '#111';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = 'rgba(45,212,191,0.12)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, TILE_SIZE - 1, TILE_SIZE - 1);
      } else {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = 'rgba(45,212,191,0.06)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, TILE_SIZE - 1, TILE_SIZE - 1);
      }
    }
  }

  // Exit glyph
  if (g.exitOpen) {
    const ex = GRID_OFFSET_X + EXIT_POS.col * TILE_SIZE + TILE_SIZE / 2;
    const ey = GRID_OFFSET_Y + EXIT_POS.row * TILE_SIZE + TILE_SIZE / 2;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 18px monospace';
    ctx.fillStyle = '#2dd4bf';
    ctx.shadowColor = '#2dd4bf';
    ctx.shadowBlur = 12;
    ctx.fillText('▼', ex, ey);
    ctx.shadowBlur = 0;
  }

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Enemies
  for (const e of g.enemies) {
    if (e.dead) continue;
    const ex = GRID_OFFSET_X + e.pos.col * TILE_SIZE + TILE_SIZE / 2;
    const ey = GRID_OFFSET_Y + e.pos.row * TILE_SIZE + TILE_SIZE / 2;

    // HP bar (2px tall, above enemy)
    const barW = TILE_SIZE - 4;
    const barX = ex - barW / 2;
    const barY = ey - TILE_SIZE / 2 + 2;
    ctx.fillStyle = '#333';
    ctx.fillRect(barX, barY, barW, 2);
    ctx.fillStyle = e.color;
    ctx.fillRect(barX, barY, barW * (e.hp / e.maxHp), 2);

    // Enemy char (first letter of name)
    ctx.font = 'bold 14px monospace';
    ctx.fillStyle = e.color;
    ctx.shadowColor = e.color;
    ctx.shadowBlur = 10;
    ctx.fillText(e.name[0], ex, ey);
    ctx.shadowBlur = 0;
  }

  // Player
  const px = GRID_OFFSET_X + g.player.pos.col * TILE_SIZE + TILE_SIZE / 2;
  const py = GRID_OFFSET_Y + g.player.pos.row * TILE_SIZE + TILE_SIZE / 2;
  ctx.font = 'bold 16px monospace';
  ctx.fillStyle = '#2dd4bf';
  ctx.shadowColor = '#2dd4bf';
  ctx.shadowBlur = 14;
  ctx.fillText('@', px, py);
  ctx.shadowBlur = 0;
}

// ─── component ─────────────────────────────────────────────────────────────────
type Props = { onClose: () => void };

export const VoidCrawler = ({ onClose }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(makeGS());
  const rafRef = useRef<number>(0);

  const [hp, setHp] = useState(10);
  const [maxHp, setMaxHp] = useState(10);
  const [floor, setFloor] = useState(1);
  const [kills, setKills] = useState(0);
  const [phase, setPhase] = useState<Phase>('playing');

  const restart = useCallback(() => {
    enemyIdCounter = 0;
    gsRef.current = makeGS();
    setHp(10);
    setMaxHp(10);
    setFloor(1);
    setKills(0);
    setPhase('playing');
  }, []);

  // Steal focus from terminal input
  useEffect(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, []);

  // Keyboard: player moves on keydown
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'Escape') { onClose(); return; }
      const g = gsRef.current;
      if (g.phase === 'playing') {
        handlePlayerMove(g, e.key);
      }
    };
    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [onClose]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const loop = (ts: number) => {
      const g = gsRef.current;
      const dt = g.lastTime !== null ? Math.min(ts - g.lastTime, 50) : 16;
      g.lastTime = ts;

      if (g.phase === 'playing') {
        // Enemy tick
        for (const e of g.enemies) {
          if (e.dead) continue;
          e.moveTimer += dt;
          if (e.moveTimer >= ENEMY_TICK) {
            e.moveTimer -= ENEMY_TICK;
            tryEnemyMove(g, e);
          }
        }

        // Floor transition
        if (g.pendingFloor) {
          g.pendingFloor = false;
          g.floor++;
          const next = makeFloor(g.floor);
          g.grid = next.grid;
          g.enemies = next.enemies;
          g.player.pos = { ...next.playerStart };
          g.player.hp = Math.min(g.player.maxHp, g.player.hp + 2);
          g.exitOpen = false;
        }
      }

      // Sync React HUD
      setHp(g.player.hp);
      setMaxHp(g.player.maxHp);
      setFloor(g.floor);
      setKills(g.kills);
      setPhase(g.phase);

      draw(ctx, g);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className='fixed inset-0 z-[9998] flex items-center justify-center bg-black/85'
    >
      <motion.div
        initial={{ y: 32, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 32, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient border */}
        <div
          className='rounded-xl p-[2px]'
          style={{
            background:
              'linear-gradient(135deg, rgba(45,212,191,0.9), rgba(191,95,255,0.7), rgba(45,212,191,0.9))',
          }}
        >
          <div className='rounded-xl bg-black overflow-hidden'>
            {/* Header */}
            <div className='flex items-center justify-between px-4 py-2 border-b border-teal-900/40'>
              <span className='font-press-start text-[10px] text-teal-400'>VOID CRAWLER</span>
              <div className='flex items-center gap-4'>
                <span className='font-press-start text-[9px] text-pink-400'>
                  HP {hp}/{maxHp}
                </span>
                <span className='font-press-start text-[9px] text-slate-400'>
                  FLOOR {floor}
                </span>
                <span className='font-press-start text-[9px] text-slate-400'>
                  KILLS {kills}
                </span>
                <button
                  onClick={onClose}
                  className='text-slate-400 hover:text-teal-400 transition-colors font-mono text-base leading-none'
                >
                  ×
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className='relative'>
              <canvas ref={canvasRef} width={CW} height={CH} />

              <AnimatePresence>
                {phase === 'gameover' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='absolute inset-0 flex flex-col items-center justify-center bg-black/75'
                  >
                    <p className='font-press-start text-sm mb-3' style={{ color: '#FF2D78' }}>
                      YOU DIED
                    </p>
                    <p className='font-press-start text-[10px] text-slate-400 mb-1'>
                      FLOOR: {floor}
                    </p>
                    <p className='font-press-start text-[10px] text-slate-400 mb-6'>
                      KILLS: {kills}
                    </p>
                    <div className='flex gap-3'>
                      <button
                        onClick={restart}
                        className='font-press-start text-[9px] px-3 py-2 border border-teal-400/60 text-teal-400 hover:bg-teal-400/10 transition-colors rounded'
                      >
                        RESTART
                      </button>
                      <button
                        onClick={onClose}
                        className='font-press-start text-[9px] px-3 py-2 border border-slate-600 text-slate-400 hover:bg-slate-800/40 transition-colors rounded'
                      >
                        EXIT
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer hint */}
            <div className='px-4 py-1 border-t border-teal-900/40 flex justify-between'>
              <span className='font-mono text-[9px] text-slate-600'>
                WASD or ↑↓←→ to move/attack
              </span>
              <span className='font-mono text-[9px] text-slate-600'>ESC to exit</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
