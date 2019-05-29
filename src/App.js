import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles.css';
import Section from './components/shared/section';
import Sidebar from './components/Sidebar/Sidebar';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Header from './components/shared/Header';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';

export default class CV extends Component {
    renderExperienceSection() {
        if (this.props.experience) {
            return (<Experience {...this.props.experience} />);
        }
        return null;
    }
    renderProjectsSection() {
        if (this.props.projects) {
            return (<Projects {...this.props.projects} />);
        }
        return null;
    }
    renderSkills() {
        if (this.props.skills) {
            return (<Skills {...this.props.skills} />);
        }
        return null;
    }
    renderTestimonials() {
        if(this.props.testimonials) {
            return <Testimonials {...this.props.testimonials} />;
        }
    }
    // renderOpenSourcePart() {
    //     return (<div>You can create your own CV like this, <a href="https://github.com/sbayd/react-cv-template" target="_blank">access to the source code.</a></div>);
    // }
    renderCareerProfile() {
        const { icon, sectionTitle, description } = this.props.careerProfile;
        const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description }} />);
        return (
            <Route path="/" exact render={() => (
                <Section
                    className="summary-section"
                    icon={icon || 'user'}
                    title={sectionTitle || 'Career Profile'}
                    description={this.props.description}
                >
                    {innerContent}
                </Section>
            )}
            />
        );
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar
                    {...this.props.profile}
                />
                <div className="main-wrapper">
                    {this.renderCareerProfile()}
                    {this.renderExperienceSection()}
                    {this.renderProjectsSection()}
                    {this.renderSkills()}
                    {this.renderTestimonials()}
                    {/* {this.renderOpenSourcePart()} */}
                </div>
            </div>
        );
    }
}

CV.propTypes = {
    profile: PropTypes.shape().isRequired,
    careerProfile: PropTypes.shape().isRequired,
    experience: PropTypes.shape().isRequired,
    projects: PropTypes.shape().isRequired,
    skills: PropTypes.shape().isRequired,
    testimonials: PropTypes.shape().isRequired
};
