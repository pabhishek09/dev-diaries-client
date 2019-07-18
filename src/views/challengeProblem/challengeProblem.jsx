import React, { Component } from 'react';

import './challengeProblem.scss'


export default class ChallengeProblemComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            challengeId:props.match.params.challengeId
        }
        console.log(this.state.challengeId);
    }
  
    render() {
        return (
            <div className="col-sm-12">
                <h1 className="text-center"> Welcome to the challenge problem page of the application</h1>
            </div>
        );
    }
}