'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/app/styles/logo.module.scss';

export const Logo = () => {
  const [clickCount, setClickCount] = useState(0);
  const [easter, setEaster] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const next = clickCount + 1;
    if (next >= 3) {
      setClickCount(0);
      setEaster(true);
      setTimeout(() => setEaster(false), 2500);
    } else {
      setClickCount(next);
      if (pathname !== '/') router.push('/');
    }
  };

  return (
    <div className='relative'>
      <a href='/' onClick={handleClick} aria-label='Home'>
        <div id={styles.yeti} className={easter ? styles.yetiEgg : ''} title='Yeti from MapleStory'>
          <div className={`${styles.eye} ${styles.eye1}`} />
          <div className={`${styles.eye} ${styles.eye2}`} />
          <div className={`${styles.cheek} ${styles.cheek1}`} />
          <div className={`${styles.cheek} ${styles.cheek2}`} />
          <div className={styles.mouth}>vvvv</div>
        </div>
      </a>
      {easter && (
        <div className='absolute top-[50px] left-0 text-xs font-mono neon-text whitespace-nowrap z-50'>
          🐉 You found me!
        </div>
      )}
    </div>
  );
};
