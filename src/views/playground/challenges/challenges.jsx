import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './challenges.scss'


export default class ChallengeComponent extends Component {
  constructor() {
      super();
      this.state = {
      }
  }
  
  render() {
    let challengeId='12344';
    return (
      <div className="col-sm-12">
        <h1 className="text-center"> All Challenges</h1>
        <NavLink to={`/playground/challenges/${challengeId}`} params={{ challengeId: challengeId }}> click here to navigate to the challenges detail</NavLink>
      </div>
    );
  }
}
