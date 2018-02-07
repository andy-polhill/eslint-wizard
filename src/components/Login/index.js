import { connect } from 'react-redux';
import { authRequested } from '../../store/auth';
import Login from './Login';

const mapStateToProps = ({ auth }) => ({
  loggedIn: Boolean(auth.token),
});

const mapDispatchToProps = {
  onLogin: authRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
