import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import withIsAuthToken from '../HOC/withAuthToken';
import config from '../../config/config';
import AccountForm from './AccountForm';
import './AccountCreate.css';

class AccountCreate extends Component {
  static defaultProps = {
    accessToken: config.EMPTY_STRING,
    error: config.EMPTY_STRING,
    user: {},
    isSuccess: false,
    isError: false,
  };

  static propTypes = {
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    accessToken: PropTypes.string,
    error: PropTypes.string,
    createAccount: PropTypes.func.isRequired,
    user: PropTypes.shape(
      {
        id: PropTypes.number,
      },
    ),
  };

  state = {
    name: config.EMPTY_STRING,
    accountType: config.DEFAULT_ACCOUNT_TYPE,
  };

  /**
   * Sets the name state when the input is changed
   * @param {SyntheticEvent} event
   */
  handleAccountNameInputChange = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value,
    });
  };

  /**
   * Sets the account type when the select is changed
   * @param {SyntheticEvent} event
   * @param {number} index
   * @param {string} value
   */
  handleAccountTypeChange = (event, index, value) => {
    this.setState({
      ...this.state,
      accountType: value,
    });
  };

  /**
   * Submits the account creation
   */
  handleAccountSubmit = () => {
    const { user, accessToken } = this.props;
    const { name, accountType } = this.state;
    if (name && accountType) {
      this.props.createAccount(accessToken, user.id, name, accountType);
    }
  };

  render() {
    const { isSuccess, error, isError } = this.props;
    return (
      <div className="accounts-create">
        <div className="accounts-create__container">
          <h1>Create Account</h1>
          <AccountForm
            accountType={this.state.accountType}
            onAccountNameInputChange={this.handleAccountNameInputChange}
            onAccountTypeChange={this.handleAccountTypeChange}
            onAccountSubmit={this.handleAccountSubmit}
          />
          { isSuccess && <Redirect to="/accounts" /> }
          { isError && <div className="accounts-create--error">{error}</div> }
        </div>
      </div>
    );
  }
}

export default withIsAuthToken(AccountCreate);
