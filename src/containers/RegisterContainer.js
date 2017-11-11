import { connect } from 'react-redux';
import Register from '../components/Register/Register';

import { usersActions } from '../actions';

const mapStateToProps = ({ users }) => users;
const mapDispatchToProps = dispatch => ({
  registerUser: (name, email, password) => {
    usersActions.registerUser(dispatch, name, email, password);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
