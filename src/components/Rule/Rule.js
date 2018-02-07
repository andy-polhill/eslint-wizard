import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import {
  Icon,
  Base,
  Heading,
  Paragraph,
  Link,
} from 'bw-axiom';

export class Rule extends PureComponent {
  static propTypes = {
    docs: PropTypes.shape({
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      recommended: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    schema: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.object.isRequired,
        properties: PropTypes.object.isRequired,
        additionalProperties: PropTypes.bool.isRequired,
      }).isRequired,
    ),
  };

  render() {
    const { docs } = this.props;
    const { description, category, recommended, url } = docs;
    return (
      <Base>
        <Heading textSize="display2">{ description }</Heading>
        <Heading textSize="headtitle">{ category }</Heading>
        <Paragraph>
          Recommended: <Icon inline name={ recommended ? 'cross' : 'tick' } />
        </Paragraph>
        <Link href={ url } target="eslint">Full details</Link>
      </Base>
    );
  }
}

export default translate()(Rule);
