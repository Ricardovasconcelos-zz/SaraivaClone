import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Orders from "./components/Orders/Orders";
import Animation from "./components/Animation/Animation";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Orders} path="/order" />
      <Route component={Animation} path="/confim" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
