import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  UserMenu as UserMenuAxiom,
} from 'bw-axiom';

export default class UserMenu extends Component {

  static propTypes = {
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
  };

  render() {
    const {
      avatarUrl,
      login,
      name,
      onLogout,
    } = this.props;

    return (
      <UserMenuAxiom
          email={ login }
          firstName={ name }
          imageSrc={ avatarUrl }
          lastName=""
          onLogout={ () => onLogout() } />
    );
  }
}
