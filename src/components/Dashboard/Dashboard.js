import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import withNavigation from "../HOC/withNavigation";

class Dashboard extends Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    isLoginError: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
  };

  render() {
    const { isLogin, isLoginSuccess, isLoginError, accessToken } = this.props;
    return (
      <div>
        <div className="dashboard__container">
          dashboard
        </div>
      </div>
    );
  }
}

export default withNavigation(Dashboard);
