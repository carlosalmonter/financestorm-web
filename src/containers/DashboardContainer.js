import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';

import { usersActions } from '../actions';

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => usersActions.loginUser(dispatch, email, password),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
