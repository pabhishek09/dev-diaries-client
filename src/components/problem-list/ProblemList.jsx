import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import './ProblemList.scss';

export default class ProblemList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount () {
  }

  render() {
    return (
      <ListGroup>
      {this.props.problems.map((problem, index) => {
        return( <ListGroup.Item key={index}>
        <NavLink to={`/playground/${this.props.challengeId}/${problem._id}`}>{problem.name}</NavLink>
        <p>{problem.desc}</p>
        </ListGroup.Item>)
      })}
    </ListGroup>
    );
  }
};

