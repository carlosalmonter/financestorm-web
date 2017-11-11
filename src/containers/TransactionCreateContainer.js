import { connect } from 'react-redux';
import TransactionCreate from '../components/TransactionCreate/TransactionCreate';

import { accountsActions, transactionsActions } from '../actions';

const mapStateToProps = ({ users, transactions, accounts }) => (
  {
    user: users.user,
    accounts: accounts.accounts,
    accessToken: users.accessToken,
    isLoading: transactions.isLoading,
    isError: transactions.isError,
    isSuccess: transactions.isSuccess,
    error: transactions.error,
  }
);
const mapDispatchToProps = dispatch => ({
  createTransaction: (accessToken, userId, name, type) => (
    transactionsActions.createTransaction(dispatch, accessToken, userId, name, type)
  ),
  getAccounts: (accessToken, userId) => accountsActions.getAccounts(dispatch, accessToken, userId),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCreate);
