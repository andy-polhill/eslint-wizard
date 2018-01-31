import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ auth }) => ({
  userId: auth.id,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
