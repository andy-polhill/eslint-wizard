import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ auth }) => ({
  loggedIn: Boolean(auth.token),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
