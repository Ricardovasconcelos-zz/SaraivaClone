import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Orders from "./components/Orders/Orders";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Orders} path="/order" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
