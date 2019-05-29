import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    return (
      <section className={`section ${this.props.className || ''}`} id={this.props.id || null}>
        <h1 className="section-title">
          <i className={`fa fa-${this.props.icon}`} />
          { this.props.title }
        </h1>
        { this.props.children }
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};
