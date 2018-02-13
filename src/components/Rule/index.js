import { connect } from 'react-redux';
import Rule from './Rule';
import rules from '../../../generated/rules';
import { push } from 'react-router-redux';

const mapStateToProps = (_, { match }) => {
  const { category, rule } = match.params;
  return {
    ...rules[category][rule] || { docs: {} },
  };
};

const mapDispatchToProps = {
  onClick: (category, rule) => {
    if (rule) {
      return push(`/category/${category}/rule/${rule}`);
    }
    return push(`/category/${category}`);
  },
};

const mergeProps = ({ categoryUrl, ruleUrl, ...rest }, { onClick }) => {
  const keys = Object.keys(rules[categoryUrl]);
  const index = keys.indexOf(ruleUrl);
  const nextRule = keys[index + 1];
  const prevRule = keys[index - 1];

  return {
    ...rest,
    onNextClick: nextRule ? () => onClick(categoryUrl, nextRule) : () => onClick(categoryUrl),
    onPrevClick: prevRule ? () => onClick(categoryUrl, prevRule) : () => onClick(categoryUrl),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Rule);
