import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Status404 from '../StatusPages/Status404';
import App from '../App';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';

export default class Root extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute component={ App } exact path="/" />
        <Route component={ App } exact path="/success" />
        <Route component={ App } exact path="/loggedin" />
        <Route exact path="/login" render={ () => (
          <App><Login /></App>
        ) } />
        <Route component={ Status404 } />
      </Switch>
    );
  }
}
