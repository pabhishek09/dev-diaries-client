import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ProblemList from '../problem-list/ProblemList';
import { NavLink } from 'react-router-dom';
import './ChallengesList.scss';

export default class ChallengesList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount () {
  }

  render() {
    return (
      <ListGroup>
      {this.props.challenges.map((challenge, index) => {
        return( <ListGroup.Item key={index}>
          {challenge.name}
          <ProblemList challengeId={challenge._id} problems={challenge.problems}/>
        </ListGroup.Item>)
      })}
    </ListGroup>
    );
  }
}
