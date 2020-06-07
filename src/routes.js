import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/" />
                <Route path="/" />
                <Route path="/" />
                <Route path="/" />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
