import { connect } from 'react-redux';
import Accounts from '../components/Accounts/Accounts';

import { accountsActions } from '../actions';

const mapStateToProps = ({ users, accounts }) => (
  {
    user: users.user,
    accessToken: users.accessToken,
    accounts: accounts.accounts,
  }
);
const mapDispatchToProps = dispatch => ({
  getAccounts: (accessToken, userId) => accountsActions.getAccounts(dispatch, accessToken, userId),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
