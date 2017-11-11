import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  componentWillMount() {
    localStorage.clear();
    this.props.logoutUser();
  }


  render() {
    return <Redirect to="/login"/>
  }
}

export default Logout;
