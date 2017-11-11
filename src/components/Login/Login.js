import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, TextField } from 'material-ui';
import { Redirect } from 'react-router-dom';
import config from '../../config/config';
import './Login.css';

class Login extends Component {
  static defaultProps = {
    isError: false,
    error: config.EMPTY_STRING,
    accessToken: config.EMPTY_STRING,
  };

  static propTypes = {
    accessToken: PropTypes.string,
    loginUser: PropTypes.func.isRequired,
    isError: PropTypes.bool,
    error: PropTypes.string,
  };

  state={
    email: config.EMPTY_STRING,
    password: config.EMPTY_STRING,
  };

  handleEmailInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        email: event.target.value,
      },
    );
  };

  handlePasswordInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        password: event.target.value,
      },
    );
  };

  handleSignInClick = () => {
    if (this.state.email && this.state.password) {
      this.props.loginUser(this.state.email, this.state.password);
    }
  };

  render() {
    const { accessToken, isError, error } = this.props;
    return (
      <div className="login">
        <div className="login__container">
          <Paper>
            <div>
              <TextField
                hintText="Email"
                onChange={this.handleEmailInputChanged}
              />
            </div>
            <div>
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                onChange={this.handlePasswordInputChanged}
              />
            </div>
            <div>
              <RaisedButton
                label="Sign in"
                onClick={this.handleSignInClick}
              />
            </div>
            { accessToken && <Redirect to="/dashboard" /> }
            { isError && <div className="login--error">{error}</div> }
          </Paper>
        </div>
      </div>
    );
  }
}

export default Login;
