import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import routes from "Constants/route.constants";
import { logoutAPI } from "Actions/Login.actions";
import DashboardLayout from "Utils/Layouts/Dashboard.layout";

const AuthenticatedRoute = (props) => {
  const { component: Component, path, account, history } = props;
  const { accessToken } = account;

  if (accessToken) {
    return (
      <DashboardLayout>
        <Route exact path={path} render={(props) => <Component {...props} />} />
      </DashboardLayout>
    );
  }

  history.push(routes.login);

  return null;
};

const mapStateToProps = (state) => ({
  account: state.account,
});

const actionCreators = {
  logoutAPI,
};

export default withRouter(connect(mapStateToProps, actionCreators)(AuthenticatedRoute));
