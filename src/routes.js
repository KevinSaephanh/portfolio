import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { ViewportProvider } from "./hooks/Viewport";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <ViewportProvider>
        <Header />
      </ViewportProvider>
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
