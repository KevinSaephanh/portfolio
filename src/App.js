import React from "react";
import Header from "./components/Header/Header";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Loader from "./pages/Loader/Loader";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("Home");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
        <div className="App">
          <Header currentPage={currentPage} handleNavClick={handleNavClick} />
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
