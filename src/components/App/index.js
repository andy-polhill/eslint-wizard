import { connect } from 'react-redux';
import App from './App';
import { authLoginRequested } from '../../store/auth';
import { profileRequested } from '../../store/profile';

const mapStateToProps = ({ auth, profile }) => ({
  hasProfile: Boolean(profile.login),
  hasToken: Boolean(auth.token),
});

const mapDispatchToProps = {
  onLogin: authLoginRequested,
  profileRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
