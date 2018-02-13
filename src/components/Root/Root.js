import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Status404 from '../StatusPages/Status404';
import App from '../App';
import Categories from '../Categories';
import Rule from '../Rule';
import Rules from '../Rules';

export default class Root extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route component={ Categories } exact path="/" />
          <Route component={ Rule } exact path="/category/:category/rule/:rule" />
          <Route component={ Rules } exact path="/category/:category" />
          <Route component={ Status404 } />
        </Switch>
      </App>
    );
  }
}
