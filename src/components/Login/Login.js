import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Base, Button } from 'bw-axiom';
import { Redirect } from 'react-router-dom';

export class Login extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  render() {
    const { onLogin, loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to={ { pathname: '/' } } />;
    }

    return (
      <Base>
        <Button onClick={ () => onLogin() }>
          Authenticate with GitHub
        </Button>
      </Base>
    );
  }
}

export default translate()(Login);
