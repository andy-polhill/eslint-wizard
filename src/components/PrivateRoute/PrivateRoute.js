import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export default class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.node.isRequired,
    userId: PropTypes.string,
  }

  render() {
    const { component: Component, userId, ...rest } = this.props;

    return (
      <Route { ...rest } render={ props => (
        userId ? <Component { ... this.props } /> : (
          <Redirect to={ {
            pathname: '/login',
            state: { from: props.location },
          } } />
        )
      ) } />
    );
  }
}
