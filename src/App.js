import React from "react";
import Header from "./components/Header/Header";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes />
            <Footer />
        </div>
    );
};

export default App;
