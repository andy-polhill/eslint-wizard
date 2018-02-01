import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ auth }) => ({
  loggedIn: Boolean(auth.token),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
