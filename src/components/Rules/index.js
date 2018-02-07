import { connect } from 'react-redux';
import Rules from './Rules';
import rules from '../../../generated/rules';
import { push } from 'react-router-redux';

const mapStateToProps = ({ routerReducer }) => ({
  rules: Object.values(rules[routerReducer.location.state.category]).map(({ categoryUrl, ruleUrl, docs }) => ({
    category: categoryUrl,
    description: docs.description,
    rule: ruleUrl,
  })),
});

const mapDispatchToProps = {
  onRuleClick: (category, rule) => push(`/category/${category}/rule/${rule}`, {
    category,
    rule,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
