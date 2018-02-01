import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Status404 from '../StatusPages/Status404';
import App from '../App';
import Login from '../Login';
import Start from '../Start';
import Rule from '../Rule';

import PrivateRoute from '../PrivateRoute';

export default class Root extends Component {
  render() {
    return (
      <App>
        <Switch>
          <PrivateRoute exact component={ Start } path="/" />
          <PrivateRoute component={ Rule } path="/rule/:rule" />
          <Route component={ Login } path="/login" />
          <Route component={ Status404 } />
        </Switch>
      </App>
    );
  }
}
