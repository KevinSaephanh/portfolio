import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/s" />
                <Route path="/b" />
                <Route path="/v" />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
