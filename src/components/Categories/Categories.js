import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { CardList } from 'bw-axiom';
import Category from './Category'

export class Categories extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { categories, onClick } = this.props;

    return (
      <CardList>
        { categories.map(({ count, name, url }) =>
          <Category
              count={ count }
              key={ name }
              name={ name }
              onClick={ () => onClick(url) }/>
        ) }
      </CardList>
    );
  }
}

export default translate()(Categories);
