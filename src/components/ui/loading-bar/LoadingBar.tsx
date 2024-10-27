import { FC, useEffect, useState } from 'react';
import styles from '@/app/styles/loadingBar.module.scss';

type LoadingBarProps = {
  maxPercent: number;
  color: string;
  onMaxPercentReached: Function;
  progressSpeed?: number;
};

export const LoadingBar: FC<LoadingBarProps> = ({
  maxPercent,
  color,
  onMaxPercentReached,
  progressSpeed = 50,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) {
      const timeoutId = setTimeout(
        () => setProgress(progress + 1),
        progressSpeed
      );
      return () => clearTimeout(timeoutId);
    } else {
      onMaxPercentReached();
    }
  }, [progress, maxPercent, onMaxPercentReached]);

  return (
    <div
      className={`mx-auto w-4/5 max-w-2xl my-auto bg-gray-200 rounded-full h-6 border-2 border-black dark:bg-gray-700 dark:border-white relative ${styles['loading-bar']}`}
    >
      <div
        className={styles.progress}
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};
