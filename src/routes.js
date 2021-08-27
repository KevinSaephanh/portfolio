import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <SlideRoutes location={location} duration={500}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </SlideRoutes>
      <Footer />
    </div>
  );
};

export default Routes;
