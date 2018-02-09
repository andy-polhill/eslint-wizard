import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import { CardList } from 'bw-axiom';
import Rule from './Rule';

export class Rules extends PureComponent {
  static propTypes = {
    rules: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })),
  };

  render() {
    const { rules } = this.props;

    return (
      <CardList>
        { rules.map(({ description, onClick }, index) =>
          <Rule
              description={ description }
              key={ index }
              onClick={ () => onClick() } />
        ) }
      </CardList>
    );
  }
}

export default translate()(Rules);
