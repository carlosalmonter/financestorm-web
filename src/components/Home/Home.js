import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import config from '../../config/config';

class Home extends Component {
  static defaultProps = {
    accessToken: config.EMPTY_STRING,
  };

  static propTypes = {
    accessToken: PropTypes.string,
  };

  render() {
    const { accessToken } = this.props;
    return (
      <div className="home__container">
        { accessToken && <Redirect to="/dashboard" /> }
        <div>
          <span><Link to={'/login'}>Login</Link></span>
          <span><Link to={'/register'}>Register</Link></span>
        </div>
      </div>
    );
  }
}

export default Home;
