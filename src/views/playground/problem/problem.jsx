import React, { Component } from 'react';
import AttemptProblem from '../../../components/attempt-problem/AttemptProblem';
import Http from '../../../utils/http.util';
import _find from 'lodash/find';
import './problem.scss';

export default class ProblemComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      problemDetails: {}
    }
  }

  async componentDidMount () {
    const { challengeId, problemId } = this.props.match.params;
    await this.getProblemDetails(challengeId, problemId);
  }

  async getProblemDetails(challengeId, problemId) {
    const challengeDetailEndpoint = `playground/challenge/${challengeId}`;
    Http.get({endpoint: challengeDetailEndpoint}).then((data) => { 
      this.setState({problemDetails: _find(data.problems, (problem) => problem._id === problemId)});
    });
  }

  render() {
    return (
      <AttemptProblem problemDetails={this.state.problemDetails}/>
    );
  }
}
