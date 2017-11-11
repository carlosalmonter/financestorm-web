import { connect } from 'react-redux';
import Logout from '../components/Logout/Logout';

import { usersActions } from '../actions';

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = dispatch => ({
  logoutUser: () => usersActions.logoutUser(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
