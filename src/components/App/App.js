import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {
  Base,
  Grid,
  GridCell,
  LogoHorizontal,
} from 'bw-axiom';
import './App.css';
import atIds from '../../../at_ids';
import AppBody from './AppBody';
import AppHeader from './AppHeader';
import Breadcrumb from '../Breadcrumb';
import Notifications from '../Notifications';
import UserMenu from '../UserMenu';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hasProfile: PropTypes.bool.isRequired,
    profileRequested: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    axiomLanguage: PropTypes.string,
  };

  getChildContext() {
    return {
      axiomLanguage: this.context.i18n.language,
    };
  }

  componentWillMount() {
    if (!this.props.hasProfile) this.props.profileRequested();
  }

  render() {
    const { children, hasProfile } = this.props;

    return (
      <Base className="bw-app" data-my-at={ atIds.App.root }>
        <Notifications />
        <AppHeader>
          <Grid responsive={ false } verticalAlign="middle">
            <GridCell>
              <LogoHorizontal width="12rem" />
            </GridCell>

            { hasProfile &&
              <GridCell shrink>
                <UserMenu />
              </GridCell>
            }
          </Grid>
          <Breadcrumb />
        </AppHeader>


        <AppBody>
          { children }
        </AppBody>
      </Base>
    );
  }
}

export default translate()(App);
