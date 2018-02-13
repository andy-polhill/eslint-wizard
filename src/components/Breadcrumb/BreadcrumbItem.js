import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'bw-axiom';

export default class BreadcrumbItem extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    const { link, name } = this.props;
    return (
      <Fragment>
        <Link href={ link } onClick={ this.handleClick }>
          { name }
        </Link>&nbsp;/&nbsp;
      </Fragment>
    );
  }
}
