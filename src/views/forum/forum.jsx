import React, { Component } from 'react';
import UserContext from '../../userDetails';
import './forum.scss';

export default class ForumComponent extends Component {
    static contextType = UserContext
    constructor(){
        super();
        this.state={
        }
    }
    componentDidMount() {
        const user = this.context
    
        console.log(user);
    }
    render() {
        return (
            <div className="center-abs">
                <h1>Welcome to the forum page of the application</h1>
            </div>
        );
    }
}