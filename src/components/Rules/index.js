import { connect } from 'react-redux';
import Rules from './Rules';
import rules from '../../../generated/rules';
import { push } from 'react-router-redux';

const mapStateToProps = (_, { match }) => {
  return {
    rules: Object.values(rules[match.params.category]).map(({ categoryUrl, ruleUrl, docs }) => ({
      category: categoryUrl,
      description: docs.description,
      rule: ruleUrl,
    })),
  };
};

const mapDispatchToProps = {
  onClick: (category, rule) => push(`/category/${category}/rule/${rule}`),
};

const mergeProps = (stateProps, { onClick }) => {
  return {
    rules: stateProps.rules.map(rule => ({
      description: rule.description,
      onClick: () => onClick(rule.category, rule.rule),
    })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Rules);
