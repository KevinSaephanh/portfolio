import React, { useEffect, useState } from "react";
import Routes from "./routes";
import Loader from "./components/Loader/Loader";

import "font-awesome/css/font-awesome.min.css";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    toggleLoading();
  }, []);

  const toggleLoading = () => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1500);
  };

  return <div className="app">{loading ? <Loader /> : <Routes />}</div>;
};

export default App;
