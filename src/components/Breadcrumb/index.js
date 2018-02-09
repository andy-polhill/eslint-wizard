import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb';
import { push } from 'react-router-redux';

const mapStateToProps = ({ routerReducer }) => {
  const keys = routerReducer.location.state ? Object.keys(routerReducer.location.state) : [];
  return {
    paths: keys.map(key => ({
      name: key,
      value: routerReducer.location.state[key],
    })),
  }
};

const mapDispatchToProps = {
  onHomeClick: () => push('/'),
  onClick: (paths) =>
    push(paths.reduce((url, path) => `${url}/${path.name}/${path.value}`, '')),
};

const mergeProps = (stateProps, { onClick, ...rest }) => ({
  ...rest,
  paths: stateProps.paths.map((path, index, paths) => ({
    ...path,
    onClick: index < paths.length - 1 ? () => onClick(paths.slice(0, index + 1)) : null,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Breadcrumb);
