import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <Route>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/skills">Skillset</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                        </ul>
                    </nav>
                </header>
            </Route>
        );
    };
};