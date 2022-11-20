import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  maxPercent: number;
  loadSpeed: number;
  fillerColor: string;
  toggleLoading: Function;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  maxPercent,
  loadSpeed,
  fillerColor,
  toggleLoading,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) setTimeout(() => setProgress(progress + 1), loadSpeed);
    else setTimeout(() => toggleLoading(), 500);
  }, [progress]);

  return (
    <div
      style={{
        height: '100%',
        width: `${progress}%`,
        backgroundColor: fillerColor,
      }}
    />
  );
};

export default ProgressBar;
