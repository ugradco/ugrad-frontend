import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "Constants/route.constants";
import Login from "Pages/login.page";
import Home from "Pages/home.page";
import AuthenticatedRoute from "./Authenticated.route";

export default () => (
  <BrowserRouter>
    <Switch>
      {/* Dashboard Route should be authentication protected. */}
      <AuthenticatedRoute exact path={routes.home} component={Home} />
      <Route exact path={routes.login} render={(props) => <Login {...props} />} />
      {/* Not Found Component */}
      {/* <Route component={NotFoundComponent} /> */}
      <Route />
    </Switch>
  </BrowserRouter>
);
