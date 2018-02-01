import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export default class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.element.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }

  render() {
    const { component: Component, loggedIn, ...rest } = this.props;

    return (
      <Route { ...rest } render={ props => (
        loggedIn ? <Component { ... this.props } /> : (
          <Redirect to={ {
            pathname: '/login',
            state: { from: props.location },
          } } />
        )
      ) } />
    );
  }
}
