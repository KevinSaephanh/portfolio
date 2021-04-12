import React from "react";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { ViewportProvider } from "./hooks/Viewport";

import "font-awesome/css/font-awesome.min.css";
import "./App.scss";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    toggleLoading();
  }, []);

  const handleNavClick = (e) => {
    const { name } = e.target;
    setCurrentPage(name);
  };

  const toggleLoading = () => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1500);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <ViewportProvider>
            <Header currentPage={currentPage} handleNavClick={handleNavClick} />
          </ViewportProvider>
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
