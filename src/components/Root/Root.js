import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Status404 from '../StatusPages/Status404';
import App from '../App';
import Login from '../Login';
import Categories from '../Categories';
import Rule from '../Rule';
import Rules from '../Rules';
import PrivateRoute from '../PrivateRoute';

export default class Root extends Component {
  render() {
    return (
      <App>
        <Switch>
          <PrivateRoute component={ Categories } exact path="/" />
          <PrivateRoute component={ Rule } exact path="/category/:category/rule/:rule" />
          <PrivateRoute component={ Rules } exact path="/category/:category" />
          <Route component={ Login } path="/login" />
          <Route component={ Status404 } />
        </Switch>
      </App>
    );
  }
}
