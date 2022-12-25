import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  maxPercent: number;
  color: string;
  toggleLoading: Function;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ maxPercent, color, toggleLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) setTimeout(() => setProgress(progress + 1), 10);
    else setTimeout(() => toggleLoading(), 50);
  }, [progress]);

  return (
    <div className='w-full mb-2 bg-gray-200 rounded-full h-6 dark:bg-gray-700 border-2 border-black dark:border-white'>
      <div
        className={'h-full rounded-full'}
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};
