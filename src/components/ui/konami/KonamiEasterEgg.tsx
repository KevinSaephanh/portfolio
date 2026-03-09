'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const DIALOG_LINES = [
  '!! EASTER EGG FOUND !!',
  '',
  'You entered the Konami Code.',
  'Most people just scroll past.',
  'You actually explored.',
  '',
  'Achievement Unlocked:',
  '"True Gamer Detected"',
];

export const KonamiEasterEgg = () => {
  const [active, setActive] = useState(false);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const konamiIdx = useRef(0);
  const showPromptRef = useRef(false);

  // Keep ref in sync so the keydown handler can read it without stale closure
  useEffect(() => {
    showPromptRef.current = showPrompt;
  }, [showPrompt]);

  const dismiss = useCallback(() => {
    setActive(false);
    setVisibleLines([]);
    setShowPrompt(false);
  }, []);

  // Konami sequence listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (active) {
        if (showPromptRef.current) dismiss();
        return;
      }
      if (e.key === KONAMI_SEQUENCE[konamiIdx.current]) {
        konamiIdx.current++;
        if (konamiIdx.current === KONAMI_SEQUENCE.length) {
          setActive(true);
          konamiIdx.current = 0;
        }
      } else {
        konamiIdx.current = e.key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, dismiss]);

  // Typewriter effect — reveal one line at a time
  useEffect(() => {
    if (!active) return;
    let lineIdx = 0;

    const showNext = () => {
      if (lineIdx < DIALOG_LINES.length) {
        const line = DIALOG_LINES[lineIdx]; // capture value before mutating index
        lineIdx++;
        setVisibleLines(prev => [...prev, line]);
        const delay = lineIdx === 1 ? 350 : 160;
        setTimeout(showNext, delay);
      } else {
        setTimeout(() => setShowPrompt(true), 500);
      }
    };

    const initialDelay = setTimeout(showNext, 200);
    return () => clearTimeout(initialDelay);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-[9999] flex items-end justify-center pb-10 px-4'
          style={{ background: 'rgba(0,0,0,0.8)' }}
          onClick={() => showPromptRef.current && dismiss()}
        >
          {/* JRPG dialog box */}
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28, delay: 0.05 }}
            className='w-full max-w-xl'
            onClick={e => e.stopPropagation()}
          >
            {/* Gradient border wrapper */}
            <div
              className='rounded-xl p-[2px]'
              style={{
                background:
                  'linear-gradient(135deg, rgba(45,212,191,0.9), rgba(191,95,255,0.7), rgba(45,212,191,0.9))',
              }}
            >
              <div className='rounded-xl bg-neutral-950 px-6 py-5 md:px-8 md:py-6'>
                {/* Speaker */}
                <div className='flex items-center gap-3 mb-4 pb-3 border-b border-teal-900/40'>
                  <span className='text-2xl'>🐉</span>
                  <span className='font-press-start text-xs neon-text tracking-wide'>
                    SYSTEM
                  </span>
                </div>

                {/* Text lines */}
                <div className='font-mono text-sm space-y-[6px] min-h-[9rem]'>
                  {visibleLines.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className={
                        !line
                          ? 'dark:text-slate-300 text-slate-400'
                          : line.startsWith('!!')
                          ? 'neon-text font-press-start text-[10px] leading-relaxed'
                          : line.startsWith('Achievement')
                          ? 'text-yellow-400 font-semibold'
                          : line.startsWith('"')
                          ? 'text-yellow-300 pl-2'
                          : 'dark:text-slate-300 text-slate-400'
                      }
                    >
                      {line || '\u00A0'}
                    </motion.p>
                  ))}
                </div>

                {/* Blinking continue prompt */}
                <AnimatePresence>
                  {showPrompt && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='flex justify-end mt-4 pt-3 border-t border-teal-900/40'
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                        className='font-mono text-xs dark:text-slate-500 text-slate-400'
                      >
                        ▶ press any key to continue
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
