import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/logo.module.scss';

export const Logo = () => {
  return (
    <>
      <Link href='/'>
        <div id={styles.yeti} title='Yeti from MapleStory'>
          <div className={`${styles.eye} ${styles.eye1}`} />
          <div className={`${styles.eye} ${styles.eye2}`} />
          <div className={`${styles.cheek} ${styles.cheek1}`} />
          <div className={`${styles.cheek} ${styles.cheek2}`} />
          <div className={styles.mouth}>vvvv</div>
        </div>
      </Link>
    </>
  );
};
