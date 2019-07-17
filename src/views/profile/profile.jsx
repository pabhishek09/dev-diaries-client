import React, { Component } from 'react';

import './profile.scss'

export default class ProfileComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
  
    render() {
        return (
            <div className="center-abs">
                <h1>Welcome to the Profile page of the application</h1>
            </div>
        );
    }
}