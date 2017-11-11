import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import config from '../../config/config';
import { RaisedButton } from "material-ui";
import './Home.css';

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
      <div className="home">
        { accessToken && <Redirect to="/dashboard" /> }
        <div className="home__container">
          <span><Link to={'/login'}><RaisedButton label={config.SIGN_IN_BUTTON_TEXT}/></Link></span>
          <span><Link to={'/register'}><RaisedButton label={config.REGISTER_IN_BUTTON_TEXT}/></Link></span>
        </div>
      </div>
    );
  }
}

export default Home;
