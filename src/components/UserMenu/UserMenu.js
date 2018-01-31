import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DropdownMenu,
  UserMenu as UserMenuAxiom,
} from 'bw-axiom';

export default class UserMenu extends Component {

  static propTypes = {
    displayName: PropTypes.string,
    email: PropTypes.string,
    imageUrl: PropTypes.string,
  };

  render() {
    const {
      displayName,
      email,
      imageUrl,
    } = this.props;

    console.log(imageUrl);

    return (
      <UserMenuAxiom
          email={ displayName }
          firstName={ displayName }
          imageSrc={ imageUrl }
          onLogout={ () => {} }>
        <DropdownMenu>

        </DropdownMenu>
      </UserMenuAxiom>
    );
  }
}
