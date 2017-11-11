import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, RaisedButton, TextField} from 'material-ui';
import { Redirect } from 'react-router-dom';
import config from '../../config/config';
import './Register.css';

class Login extends Component {
  static propTypes = {
    isError: PropTypes.bool.isRequired,
    registerUser: PropTypes.func.isRequired,
    accessToken: PropTypes.string,
  };

  state={
    name: config.EMPTY_STRING,
    email: config.EMPTY_STRING,
    password: config.EMPTY_STRING
  };

  handleNameInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        name: event.target.value
      }
    );
  };

  handleEmailInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        email: event.target.value
      }
    );
  };

  handlePasswordInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        password: event.target.value
      }
    );
  };

  handleRegisterClick = () => {
    this.props.registerUser(this.state.name, this.state.email, this.state.password);
  };

  render() {
    const { isError, accessToken } = this.props;
    return (
      <div className="register">
        <div className="register__container">
          <Paper>
            <div>
              <TextField
                hintText="Name"
                onChange={this.handleNameInputChanged}
              />
            </div>
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
                label="Register"
                onClick={this.handleRegisterClick}
              />
            </div>
            { accessToken && <Redirect to="/dashboard" /> }
          </Paper>
        </div>
      </div>
    );
  }
}

export default Login;
