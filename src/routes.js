import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
