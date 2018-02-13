import { connect } from 'react-redux';
import { authLoginRequested } from '../../store/auth';
import Login from './Login';

const mapStateToProps = ({ auth }) => ({
  loggedIn: Boolean(auth.token),
});

const mapDispatchToProps = {
  onLogin: authLoginRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
