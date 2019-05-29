import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Section from '../shared/section';
import './Experience.css';

export default class Experience extends Component {
    renderListItem(item, i) {
        return (
            <div className='item' key={`exp_item_${i}`}>
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title" key="title-{i}">{item.title}</h3>
                        <div className="time" key="time-{i}">{item.date}</div>
                    </div>
                    {this.renderCompanySection(item.company, item.companyLink, item.companyShortDetail)}
                </div>
                <div className="details">
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="tech" key="tech-{i}">{item.tech}</div>
                </div>
            </div>
        );
    }
    renderCompanySection(company, companyLink, companyShortDetail) {
        if (company && companyLink) {
            return (<div className="company" key="company-{i}"> <a href={companyLink} target="_blank">{company}</a> {companyShortDetail || ''}</div>);
        }
        return null;
    }
    render() {
        const { icon, sectionTitle, list } = this.props;
        return (
            <Route path="/experience" render={() => (
                <Section
                    className="experiences-section"
                    icon={icon || 'briefcase'}
                    title={sectionTitle || 'Experience'}
                    id="experience" >
                    {list.map((item, i) => {
                        return this.renderListItem(item, i);
                    })}
                </Section>
            )} />
        );
    };
};

Experience.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    icon: PropTypes.string
};
