import React from 'react';

type ProgressBarProps = {
  maxPercent: number;
  color: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  maxPercent,
  color,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < maxPercent) {
      setTimeout(() => setProgress(progress + 1), 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
