import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import {
  Card,
  CardContent,
  Grid,
  GridCell,
  Text,
} from 'bw-axiom';

export class Rule extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { description, onClick } = this.props;

    return (
      <Card
          border
          elevation="x1"
          key={ name }
          onClick={ () => onClick() }
          space="x4">
        <CardContent size="large">
          <Grid responsive={ false }>
            <GridCell>
              <Text textSize="headtitle">{ description }</Text>
            </GridCell>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default translate()(Rule);
