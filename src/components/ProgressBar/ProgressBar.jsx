import React, { useEffect, useState } from "react";

const ProgressBar = ({
  maxPercent,
  toggleLoading,
  progressBarContainerStyles,
  fillerColor,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < maxPercent) setTimeout(() => setProgress(progress + 1), 20);
    else setTimeout(() => toggleLoading(), 1000);
  }, [progress]);

  return (
    <div className="progress-bar-container" style={progressBarContainerStyles}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: fillerColor,
        }}
        className="progress-bar"
      />
    </div>
  );
};

export default ProgressBar;
