import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import { CardList } from 'bw-axiom';
import Rule from './Rule';

export class Rules extends PureComponent {
  static propTypes = {
    rules: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rule: PropTypes.string.isRequired,
    })),
    onRuleClick: PropTypes.func.isRequired,
  };

  render() {
    const { onRuleClick, rules } = this.props;

    return (
      <CardList>
        { rules.map(({ category, description, rule }, index) =>
          <Rule
              description={ description }
              key={ index }
              onClick={ () => onRuleClick(category, rule) } />
        ) }
      </CardList>
    );
  }
}

export default translate()(Rules);
