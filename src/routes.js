import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ViewportProvider } from "./hooks/Viewport";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <ViewportProvider>
        <Header />
      </ViewportProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
