import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Logout extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  };

  componentWillMount() {
    localStorage.clear();
    this.props.logoutUser();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;
