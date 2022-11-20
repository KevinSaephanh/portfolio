import React, { useEffect, useState } from "react";

const ProgressBar = ({
  maxPercent,
  toggleLoading,
  loadSpeed,
  progressBarContainerStyles,
  fillerColor,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent)
      setTimeout(() => setProgress(progress + 1), loadSpeed);
    else setTimeout(() => toggleLoading(), 500);
  }, [progress]);

  return (
    <div style={progressBarContainerStyles}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: fillerColor,
        }}
      />
    </div>
  );
};

export default ProgressBar;