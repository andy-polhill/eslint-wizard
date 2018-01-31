import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ auth }) => ({
  userId: auth.id,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
