import React from "react";
import { connect } from "react-redux";

import LoginComponent from "Components/Authentication/Login.component";

class LoginContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(LoginContainer);
