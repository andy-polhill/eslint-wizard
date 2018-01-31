import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Base, Button } from 'bw-axiom';

export class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  render() {
    const { onLogin } = this.props;

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
