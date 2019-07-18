import React, { Component } from 'react';
import AttemptProblem from '../../../components/attempt-problem/AttemptProblem';
import Http from '../../../utils/http.util';
import './problem.scss';

export default class ProblemComponent extends Component {
  constructor(props) {
    super();
  }

  async componentDidMount () {
    const { challengeId, problemId } = this.props.match.params;
    const challengeDetails = await this.getProblemDetails(challengeId, problemId);
  }

  async getProblemDetails(challengeId, problemId) {
    const endpoint = `playground/${challengeId}/${problemId}`;
    Http.get({endpoint: 'status'}).then((data) => { console.log('API is up') });
  }

  render() {
    return (
      <AttemptProblem/>
    );
  }
}
