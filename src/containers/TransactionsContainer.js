import { connect } from 'react-redux';
import Transactions from '../components/Transactions/Transactions';

import { transactionsActions } from '../actions';

const mapStateToProps = ({ users, transactions }) => (
  {
    user: users.user,
    accessToken: users.accessToken,
    transactions: transactions.transactions,
    isLoading: transactions.isLoading,
    isError: transactions.isError,
  }
);
const mapDispatchToProps = dispatch => ({
  getTransactions: (accessToken, userId) => (
    transactionsActions.getTransactions(dispatch, accessToken, userId)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
