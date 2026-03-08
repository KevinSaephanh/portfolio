'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';
import styles from '@/app/styles/loadingBar.module.scss';

const MIN_DISPLAY_MS = 5000;

type LoadingBarProps = {
  onComplete: () => void;
};

export const LoadingBar: FC<LoadingBarProps> = ({ onComplete }) => {
  const { progress, active } = useProgress();
  const completedRef = useRef(false);
  const [displayProgress, setDisplayProgress] = useState(0);

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

  // Complete only when both the timer has finished AND the model is actually loaded
  useEffect(() => {
    if (completedRef.current) return;
    if (displayProgress >= 100 && progress >= 100 && !active) {
      completedRef.current = true;
      onComplete();
    }
  }, [displayProgress, progress, active, onComplete]);

  return (
    <div className='w-4/5 max-w-2xl mx-auto flex flex-col gap-2 mt-4'>
      <div className='flex justify-between font-mono text-xs dark:text-slate-400 text-slate-500 mb-1'>
        <span>// initializing portfolio</span>
        <span className='neon-text'>{Math.round(displayProgress)}%</span>
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
