import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import withIsAuthToken from '../HOC/withAuthToken';
import config from '../../config/config';
import TransactionForm from './TransactionForm';
import './TransactionCreate.css';

class TransactionCreate extends Component {
  static defaultProps = {
    accessToken: config.EMPTY_STRING,
    error: config.EMPTY_STRING,
    user: {},
    isSuccess: false,
    isError: false,
    accounts: [],
  };

  static propTypes = {
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    accounts: PropTypes.arrayOf(PropTypes.object),
    accessToken: PropTypes.string,
    error: PropTypes.string,
    createTransaction: PropTypes.func.isRequired,
    getAccounts: PropTypes.func.isRequired,
    user: PropTypes.shape(
      {
        id: PropTypes.number,
      },
    ),
  };

  state = {
    description: config.EMPTY_STRING,
    transactionType: config.DEFAULT_TRANSACTION_TYPE,
    date: config.EMPTY_STRING,
    accountId: config.ZERO_VALUE,
    tagId: config.ZERO_VALUE,
    amount: config.ZERO_VALUE,
  };

  componentDidMount() {
    if (this.props.accessToken) {
      this.props.getAccounts(this.props.accessToken, this.props.user.id);
    }
  }

  /**
   * Sets the description state when the input is changed
   * @param {SyntheticEvent} event
   */
  handleDescriptionChange = (event) => {
    this.setState({
      ...this.state,
      description: event.target.value,
    });
  };

  /**
   * Sets the type state when the input is changed
   * @param {SyntheticEvent} event
   * @param {number} index
   * @param {string} value
   */
  handleTypeChange = (event, index, value) => {
    this.setState({
      ...this.state,
      transactionType: value,
    });
  };

  /**
   * Sets the account id state when the input is changed
   * @param {SyntheticEvent} event
   * @param {number} index
   * @param {string} value
   */
  handleAccountChange = (event, index, value) => {
    this.setState({
      ...this.state,
      accountId: value,
    });
  };

  /**
   * Sets the tag id state when the input is changed
   * @param {SyntheticEvent} event
   * @param {number} index
   * @param {string} value
   */
  handleTagChange = (event, index, value) => {
    this.setState({
      ...this.state,
      tagId: value,
    });
  };

  /**
   * Sets the amount when the input is changed
   * @param {SyntheticEvent} event
   */
  handleAmountChange = (event) => {
    this.setState({
      ...this.state,
      amount: event.target.value,
    });
  };

  /**
   * Sets the date state when the input is changed
   * @param {SyntheticEvent} event
   * @param {Date} date
   */
  handleDateChange = (event, date) => {
    this.setState({
      ...this.state,
      date: moment(date).format(config.DATE_FORMAT),
    });
  };

  /**
   * Submits the transaction create request
   */
  handleTransactionSubmit = () => {
    const { user, accessToken } = this.props;
    const { description, transactionType, date, accountId, tagId, amount } = this.state;
    if (description && transactionType && date && accountId && tagId && amount) {
      const params = {
        description,
        date,
        amount,
        type: transactionType,
        account_id: accountId,
        tag_id: tagId,
      };
      this.props.createTransaction(accessToken, user.id, params);
    }
  };

  render() {
    const { isSuccess, error, isError, user, accounts } = this.props;
    return (
      <div className="accounts-create">
        <div className="accounts-create__container">
          <h1>Create Transaction</h1>
          <TransactionForm
            userData={user}
            accounts={accounts}
            transactionType={this.state.transactionType}
            accountId={this.state.accountId}
            tagId={this.state.tagId}
            onDescriptionChange={this.handleDescriptionChange}
            onTypeChange={this.handleTypeChange}
            onAccountChange={this.handleAccountChange}
            onTagChange={this.handleTagChange}
            onAmountChange={this.handleAmountChange}
            onDateChange={this.handleDateChange}
            onTransactionSubmit={this.handleTransactionSubmit}
          />
          { isSuccess && <Redirect to="/transactions" /> }
          { isError && <div className="transactions-create--error">{error}</div> }
        </div>
      </div>
    );
  }
}

export default withIsAuthToken(TransactionCreate);
