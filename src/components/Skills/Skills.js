import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Section from '../shared/section';
import './Skills.css';

export default class Skills extends Component {
    renderListItem(item, i) {
        return (
            <li className="item" key={`tag_item_${i}`}>
                {item}
            </li>
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
            <Route path="/skills" render={() => (
                <Section
                    className="skills-section"
                    icon={icon || 'wrench'}
                    id="skills"
                    title={sectionTitle || 'Skillset'}
                >
                    {this.renderIntro(description)}
                    <div className="skills">
                        <ul className="skillset">
                            {list.map((item, i) => {
                                return this.renderListItem(item, i);
                            })}
                        </ul>
                    </div>
                </Section>
            )} />
        );
    }
}

Skills.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    icon: PropTypes.string
};
