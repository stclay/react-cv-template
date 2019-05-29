import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends Component {

    renderListItem(className, data, iconName, type) {
        if (!data) { return null; }

        let href = data;
        let linkText = '';
        data = data.replace('&', '@');

        switch (type) {
            case 'email':
                href = `mailto:${data}`;
                linkText = data;
                break;
            case 'phone':
                href = `tel:${data}`;
                linkText = data;
                break;
            case 'linkedin':
                href = `https://${data}`;
                linkText = 'LinkedIn Profile';
                break;
            case 'github':
                href = `https://${data}`;
                linkText = 'Github';
                break;
            default:
                href = `${data}`;
                linkText = 'Resume';
        }

        return (
            <li className={className}>
                <i className={`fa ${iconName}`} />
                <span className="href-text">
                    {
                        href.indexOf('mailto') >= 0 ?
                            <a href={`${href}`}>{linkText}</a>
                            :
                            <a href={href} target="_blank">{linkText}</a>
                    }
                </span>
            </li>
        );
    }
    render() {
        return (
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    {this.renderListItem('email', this.props.mail, 'fa-envelope', 'email')}
                    {this.renderListItem('phone', this.props.phoneNumber, 'fa-phone', 'phone')}
                    {this.renderListItem('website', this.props.website, 'fa-globe', 'link')}
                    {this.renderListItem('linkedin', this.props.linkedin, 'fa-linkedin', 'linkedin')}
                    {this.renderListItem('github', this.props.github, 'fa-github', 'github')}
                    {this.renderListItem('resume', this.props.resume, 'fa-download', 'resume')}
                </ul>
            </div>
        );
    }
}

ContactDetails.propTypes = {
    mail: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    resume: PropTypes.string,
};

ContactDetails.defaultProps = {
    phoneNumber: null,
    website: null,
    linkedin: null,
    github: null,
    resume: null
};
