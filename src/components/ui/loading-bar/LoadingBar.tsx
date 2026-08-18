'use client';

import { FC, useEffect, useRef, useState } from 'react';
import styles from '@/app/styles/loadingBar.module.scss';

const MIN_DISPLAY_MS = 1200;

const BOOT_LINES = [
  '> PORTFOLIO.EXE',
  '> Authenticating user... [OK]',
  '> Loading assets...',
];

type LoadingBarProps = {
  onComplete: () => void;
};

export const LoadingBar: FC<LoadingBarProps> = ({ onComplete }) => {
  const completedRef = useRef(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  // Smoothly fill the bar over MIN_DISPLAY_MS
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / MIN_DISPLAY_MS) * 100, 100);
      setDisplayProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Reveal boot lines progressively
  useEffect(() => {
    const timings = [0, 200, 500];
    const timeouts = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(prev => [...prev, line]), timings[i])
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Complete when timer finishes (VRM loads in background after)
  useEffect(() => {
    if (completedRef.current) return;
    if (displayProgress >= 100) {
      completedRef.current = true;
      onComplete();
    }
  }, [displayProgress, onComplete]);

  const pct = Math.round(displayProgress);
  const filled = Math.round(pct / 10);
  const empty = 10 - filled;
  const barStr = '█'.repeat(filled) + '░'.repeat(empty);

  return (
    <div className='w-4/5 max-w-2xl mx-auto flex flex-col gap-3 mt-6'>
      <div className='font-mono text-sm dark:text-slate-300 text-slate-600 space-y-1 min-h-[4.5rem]'>
        {visibleLines.map((line, i) => {
          if (i === 2) {
            return (
              <p key={i} className='flex items-center gap-2'>
                <span>{line}</span>
                <span className='neon-text tracking-widest'>{barStr}</span>
                <span className='neon-text'>{pct}%</span>
              </p>
            );
          }
          const okIdx = line.indexOf('[OK]');
          return (
            <p key={i}>
              {okIdx !== -1 ? (
                <>
                  {line.slice(0, okIdx)}
                  <span className='text-teal-400'>[OK]</span>
                </>
              ) : (
                line
              )}
            </p>
          );
        })}
      </div>
      <div
        className={`rounded-full h-5 border border-teal-600/40 dark:bg-gray-900 bg-gray-200 relative overflow-hidden ${styles['loading-bar']}`}
      >
        <div
          className={styles.progress}
          style={{ width: `${displayProgress}%` }}
        />
      </div>
    </div>
  );
};
