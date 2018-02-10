import { connect } from 'react-redux';
import Rule from './Rule';
import rules from '../../../generated/rules';
import { push } from 'react-router-redux';

const mapStateToProps = (_, { computedMatch }) => {
  const { category, rule } = computedMatch.params;
  return {
    ...rules[category][rule] || { docs: {} },
  };
};

const mapDispatchToProps = {
  onClick: (category, rule) => push(`/category/${category}/rule/${rule}`, {
    category, rule,
  }),
};

const mergeProps = ({ categoryUrl, ruleUrl, ...rest }, { onClick }) => {
  const keys = Object.keys(rules[categoryUrl]);
  const index = keys.indexOf(ruleUrl);
  const nextRule = keys[index + 1];
  const prevRule = keys[index - 1];

  return {
    ...rest,
    onNextClick: nextRule ? () => onClick(categoryUrl, nextRule) : null,
    onPrevClick: prevRule ? () => onClick(categoryUrl, prevRule) : null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Rule);
