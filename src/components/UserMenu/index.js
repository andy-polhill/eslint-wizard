import { connect } from 'react-redux';
import UserMenu from './UserMenu';
import { authLogoutRequested } from '../../store/auth';

const mapStateToProps = ({ profile }) => ({
  login: profile.login,
  name: profile.name,
  avatarUrl: profile.avatarUrl,
});

const mapDispatchToProps = {
  onLogout: authLogoutRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
