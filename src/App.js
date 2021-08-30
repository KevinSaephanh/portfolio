import React, { useState } from "react";
import Routes from "./routes";
import ProgressBar from "./components/ProgressBar/ProgressBar";

import "./App.scss";

// Styles for inital progress bar
const progressBarContainerStyles = {
  margin: "auto",
  position: "relative",
  display: "block",
  width: "20rem",
  height: "1.7rem",
  border: "4px solid white",
};

const App = () => {
  const [isLoading, setLoading] = useState(true);

  const toggleLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="app">
      {isLoading ? (
        <div style={{ margin: "auto" }}>
          <ProgressBar
            maxPercent={100}
            progressBarContainerStyles={progressBarContainerStyles}
            toggleLoading={toggleLoading}
            loadSpeed={15}
            fillerColor={"#0dba86"}
          />
          <div className="loader-text">LOADING...</div>
        </div>
      ) : (
        <Routes />
      )}
    </div>
  );
};

export default App;
