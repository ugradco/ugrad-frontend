import React from "react";
import { connect } from "react-redux";

import HomeComponent from "Components/Home/Home.component";

class HomeContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <HomeComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(HomeContainer);
