import React, { Component } from 'react';

import './forum.scss';

export default class ForumComponent extends Component {
    constructor(){
        super();
        this.state={
        }
    }

    render() {
        return (
            <div className="center-abs">
                <h1>Welcome to the forum page of the application</h1>
            </div>
        );
    }
}