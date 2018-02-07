import { connect } from 'react-redux';
import Rule from './Rule';
import rules from '../../../generated/rules';

const mapStateToProps = ({ routerReducer }) => {
  const { category, rule } = routerReducer.location.state;
  return {
    ...rules[category][rule] || { docs: {} },
  };
};

export default connect(mapStateToProps)(Rule);
