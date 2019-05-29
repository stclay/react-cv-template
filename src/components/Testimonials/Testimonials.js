import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Section from '../shared/section';
import './Testimonials.css';

export default class Testimonials extends Component {
    renderListItem(item, i) {
        return (
            <div className='item' key={`exp_item_${i}`}>
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="name-title" key="name-{i}">{item.name}, {item.title}</h3>
                    </div>
                </div>
                <div className="review">
                    <div dangerouslySetInnerHTML={{ __html: item.review }} />
                </div>
            </div>
        );
    }
    renderIntro(description) {
        if (!description) { return null; }
        return (
            <div className="intro">
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>);
    }

    render() {
        const {
            icon,
            sectionTitle,
            description,
            list
        } = this.props;
        return (
            <Route path="/testimonials" render={() => (
                <Section
                    className="testimonials-section"
                    icon={icon || 'quote-left'}
                    title={sectionTitle || 'Testimonials'}
                    id="testimonials"
                    >
                    {this.renderIntro(description)}
                    {list.map((item, i) => {
                        return this.renderListItem(item, i);
                    })}
                </Section>
            )} />
        );
    };
};

Testimonials.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    icon: PropTypes.string
};
