import React, { useEffect, useState } from "react";
import Routes from "./routes";
import Loader from "./components/Loader/Loader";

import "./App.scss";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => setProgress(progress + 1), 80);
    } else {
      setTimeout(() => setLoading(false), 1500);
    }
  }, [progress]);

  return (
    <div className="app">
      {isLoading ? <Loader progress={progress} /> : <Routes />}
    </div>
  );
};

export default App;
