import { FC, useEffect, useState } from 'react';

type ProgressBarProps = {
  maxPercent: number;
  color: string;
  onMaxPercentReached: Function;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  maxPercent,
  color,
  onMaxPercentReached,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) {
      setTimeout(() => setProgress(progress + 1), 40);
    } else {
      onMaxPercentReached();
    }
  }, [progress]);

  return (
    <div className='w-4/5 max-w-2xl my-auto bg-gray-200 rounded-full h-4 md:h-6 dark:bg-gray-700 border-2 border-black dark:border-white shadow-lg shadow-slate-900 dark:shadow-zinc-200'>
      <div
        className={'h-full rounded-full'}
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};
