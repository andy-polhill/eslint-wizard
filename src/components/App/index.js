import { connect } from 'react-redux';
import App from './App';
import { profileRequested } from '../../store/profile';

const mapStateToProps = ({ profile }) => ({
  hasProfile: Boolean(profile.login),
});

const mapDispatchToProps = {
  profileRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
