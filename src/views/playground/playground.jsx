import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './playground.scss'
import Playground from '../../playground/Playground';

export default class PlaygroundComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
  
    render() {
        return (
            <div className="col-sm-12">
                <h1 className="text-center"> Welcome to the Playground page of the application</h1>
                <NavLink to={`/playground/challenges`} > click here to navigate to the challenges</NavLink>
                <Playground/>
            </div>
        );
    }
}