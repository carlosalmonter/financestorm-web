import { connect } from 'react-redux';
import Login from '../components/Login/Login';

import { usersActions } from '../actions';

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => usersActions.loginUser(dispatch, email, password),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
