import { connect } from 'react-redux';
import AccountCreate from '../components/AccountCreate/AccountCreate';

import { accountsActions } from '../actions';

const mapStateToProps = ({ users, accounts }) => (
  {
    user: users.user,
    accessToken: users.accessToken,
    isLoading: accounts.isLoading,
    isError: accounts.isError,
    isSuccess: accounts.isSuccess,
    error: accounts.error,
  }
);
const mapDispatchToProps = dispatch => ({
  createAccount: (accessToken, userId, name, type) => (
    accountsActions.createAccount(dispatch, accessToken, userId, name, type)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreate);
