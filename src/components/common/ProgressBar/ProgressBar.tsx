import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  maxPercent: number;
  loadSpeed: number;
  fillerColor: string;
  toggleLoading?: Function;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  maxPercent,
  loadSpeed,
  fillerColor,
  toggleLoading,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) setTimeout(() => setProgress(progress + 1), loadSpeed);
    else setTimeout(() => toggleLoading, 500);
  }, [progress]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 border-2 border-black dark:border-white">
      <span className={`h-full ${fillerColor}`} style={{ width: `${progress}%` }} />
    </div>
  );
};
