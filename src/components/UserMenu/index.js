import { connect } from 'react-redux';
import UserMenu from './UserMenu';

const mapStateToProps = ({ profile }) => ({
  login: profile.login,
  name: profile.name,
  avatarUrl: profile.avatarUrl,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
