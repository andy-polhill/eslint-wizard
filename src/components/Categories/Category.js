import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {
  Badge,
  Card,
  CardContent,
  Grid,
  GridCell,
  Strong,
  Text,
} from 'bw-axiom';

export class Category extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { count, name, onClick } = this.props;

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
              <Text textSize="headline">{ name }</Text>
            </GridCell>
            <GridCell fill shrink>
              <Badge>Rules: <Strong>{ count }</Strong></Badge>
            </GridCell>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default translate()(Category);
