import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Icon,
  Link,
  Toolbar,
  Tool,
} from 'bw-axiom';

export default class Breadcrumb extends Component {
  static propTypes = {
    paths: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired),
    onHomeClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick(event) {
    event.preventDefault();
    this.props.onHomeClick();
  }

  render() {
    return (
      <Toolbar>
        <Tool>
          <Link href="/" onClick={ (event) => this.handleHomeClick(event) } >
            <Icon inline name="home" />&nbsp;/&nbsp;
          </Link>
          { this.props.paths.map(path => path.onClick ? (
            <Link key={ path.name } onClick={ () => path.onClick() }>
              { path.value }&nbsp;/&nbsp;
            </Link>
          ) : (
            <span>{ path.value }</span>
          )) }
        </Tool>
      </Toolbar>
    );
  }
}
