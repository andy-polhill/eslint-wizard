import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DropdownMenu,
  UserMenu as UserMenuAxiom,
} from 'bw-axiom';

export default class UserMenu extends Component {

  static propTypes = {
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const {
      login,
      name,
      avatarUrl,
    } = this.props;

    return (
      <UserMenuAxiom
          email={ login }
          firstName={ name }
          imageSrc={ avatarUrl }
          lastName=""
          onLogout={ () => {} } />
    );
  }
}
