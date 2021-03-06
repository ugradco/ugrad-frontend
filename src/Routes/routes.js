import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthenticationLayout from "Utils/Layouts/Authentication.layout";
import HomeContainer from "Containers/Home.container";
import LoginContainer from "Containers/Login.container";
import routes from "Constants/route.constants";
import AuthenticatedRoute from "./Authenticated.route";

export default () => (
  <BrowserRouter>
    <Switch>
      {/* Dashboard Route should be authentication protected. */}
      <AuthenticatedRoute exact path={routes.home} component={HomeContainer} />
      <Route
        exact
        path={routes.login}
        render={(props) => (
          <AuthenticationLayout>
            <LoginContainer {...props} />
          </AuthenticationLayout>
        )}
      />
      {/* Not Found Component */}
      {/* <Route component={NotFoundComponent} /> */}
      <Route />
    </Switch>
  </BrowserRouter>
);
