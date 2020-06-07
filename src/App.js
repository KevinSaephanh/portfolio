import React from "react";
import Header from "./components/Header/Header";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = React.useState("Home");

    const handleNavClick = (e) => {
        const { name } = e.target;
        setCurrentPage(name);
    };

    return (
        <div className="App">
            <Header currentPage={currentPage} handleNavClick={handleNavClick} />
            <Routes />
            <Footer />
        </div>
    );
};

export default App;
