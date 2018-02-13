import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Icon,
  Link,
  Paragraph,
  Text,
  Toolbar,
  Tool,
} from 'bw-axiom';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends Component {
  static propTypes = {
    onBreadcrumbClick: PropTypes.func.isRequired,
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
          <Paragraph>
            <Link href="/" onClick={ (event) => this.handleHomeClick(event) } >
              <Icon inline name="home" />&nbsp;/&nbsp;
            </Link>
            <Route path="*" render={ ({ location }) => {
              const parts = location.pathname.split('/');

              return parts
                .filter((part, index) => index > 0 && index % 2 === 0)
                .map((name, index, filteredParts) => {
                  const link = parts
                    .slice(0, parts.indexOf(name) + 1)
                    .reduce((acc, part) => `${acc}${part}/`, '');

                  return (index === filteredParts.length - 1)
                  ? <Text>{ name }</Text>
                  : <BreadcrumbItem
                      key={ index }
                      link={ link }
                      name={ name }
                      onClick={ () => this.props.onBreadcrumbClick(link) } />;
                });
            } } />
          </Paragraph>
        </Tool>
      </Toolbar>
    );
  }
}
