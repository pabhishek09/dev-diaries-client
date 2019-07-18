import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

export default class ErrorComponent extends Component {
    render () {
        return (
            <div className="center-abs">
                <h1>Whoops! </h1>
                <p>Somewhere something went wrong! Let me show you the way back <NavLink to="/profile" exact className="" >My Profile</NavLink>.</p>
            </div>
        );
    }
}
