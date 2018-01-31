import { connect } from 'react-redux';
import UserMenu from './UserMenu';

const mapStateToProps = ({ auth }) => ({
  displayName: auth.displayName,
  imageUrl: auth.imageUrl,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
