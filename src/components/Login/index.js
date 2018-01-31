import { connect } from 'react-redux';
import { authLoginRequested } from '../../store/auth';
import Login from './Login';

const mapStateToProps = ({ auth }) => ({
  userId: auth.id,
});

const mapDispatchToProps = {
  onLogin: authLoginRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
