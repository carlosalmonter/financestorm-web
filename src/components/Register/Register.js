import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, TextField } from 'material-ui';
import { Redirect } from 'react-router-dom';
import config from '../../config/config';
import './Register.css';

class Login extends Component {
  static defaultProps = {
    accessToken: config.EMPTY_STRING,
  };

  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    accessToken: PropTypes.string,
  };

  state={
    name: config.EMPTY_STRING,
    email: config.EMPTY_STRING,
    password: config.EMPTY_STRING,
  };

  /**
   * Sets the name state when the input is changed
   * @param {SyntheticEvent} event
   */
  handleNameInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        name: event.target.value,
      },
    );
  };

  /**
   * Sets the email state when the input is changed
   * @param {SyntheticEvent} event
   */
  handleEmailInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        email: event.target.value,
      },
    );
  };

  /**
   * Sets the password state when the input is changed
   * @param {SyntheticEvent} event
   */
  handlePasswordInputChanged = (event) => {
    this.setState(
      {
        ...this.state,
        password: event.target.value,
      },
    );
  };

  /**
   * Submits the register request
   */
  handleRegisterClick = () => {
    this.props.registerUser(this.state.name, this.state.email, this.state.password);
  };

  render() {
    const { accessToken } = this.props;
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
