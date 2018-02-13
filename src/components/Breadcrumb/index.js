import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb';
import { push } from 'react-router-redux';

const mapStateToProps = ({ routerReducer }) => ({
  path: routerReducer.location.pathname,
});

const mapDispatchToProps = {
  onHomeClick: () => push('/'),
  onBreadcrumbClick: url => push(url),
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
