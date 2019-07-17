import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './challengeDetail.scss'


export default class ChallengeDetailComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            challengeId:props.match.params.challengeId
        }
        console.log(this.state.challengeId);
        
    }
  
    render() {
        let challengeId=this.state.challengeId;
        return (
            <div className="col-sm-12">
                <h1 className="text-center"> Welcome to the challenge detail page of the application</h1>
                <NavLink to={`/playground/challenges/${challengeId}/problem`} params={{ challengeId: challengeId }}> click to go to problem page</NavLink>
            </div>
        );
    }
}