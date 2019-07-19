import React, { Component } from 'react';
import './ChallengesList.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import ProblemList from '../problem-list/ProblemList';
import _map from 'lodash/map';

export default class ChallengesList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ListGroup>
      {_map(this.props.challenges, (challenge, index) => {
        return( <ListGroup.Item key={index}>
          <p>{challenge.name}</p>
          <p>{challenge.desc}</p>
          <ProblemList challengeId={challenge._id} problems={challenge.problems}/>
        </ListGroup.Item>)
      })}
    </ListGroup>
    );
  }
}
