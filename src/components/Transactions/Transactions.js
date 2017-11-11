import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import TransactionsList from './TransactionsList';
import withIsAuthToken from '../HOC/withAuthToken';
import './Transactions.css';
import config from '../../config/config';

class Transactions extends Component {
  static defaultProps = {
    transactions: [],
    accessToken: config.EMPTY_STRING,
    user: {},
    isLoading: false,
    isError: false,
  };

  static propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    transactions: PropTypes.arrayOf(PropTypes.object),
    accessToken: PropTypes.string,
    getTransactions: PropTypes.func.isRequired,
    user: PropTypes.shape(
      {
        id: PropTypes.number,
      },
    ),
  };

  componentDidMount() {
    if (this.props.accessToken) {
      this.props.getTransactions(this.props.accessToken, this.props.user.id);
    }
  }
  render() {
    const { transactions, isLoading, isError, accessToken } = this.props;
    return (
      <div className="transactions">
        <div className="transactions__container">
          <h1>Transactions</h1>
          <Link to="/transactions/create">
            <RaisedButton label={'Create Transaction'} />
          </Link>
          <TransactionsList
            transactionsData={transactions}
            isLoading={isLoading}
            isError={isError}
            accessToken={accessToken}
          />
        </div>
      </div>
    );
  }
}

export default withIsAuthToken(Transactions);
