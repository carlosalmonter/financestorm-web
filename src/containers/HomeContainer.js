import { connect } from 'react-redux';
import Home from '../components/Home/Home';

const mapStateToProps = ({ users }) => users;

export default connect(mapStateToProps)(Home);
