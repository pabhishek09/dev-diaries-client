import React, { Component } from 'react';
import AttemptProblem from '../../../components/attempt-problem/AttemptProblem';
import { getProfile } from "../../../utils/profile.util";
import Http from '../../../utils/http.util';
import _find from 'lodash/find';
import './problem.scss';
let challengeIdentifier;
let userProfile;

export default class ProblemComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      problemDetails: {},
      userId : ''
    }
  }

  componentDidMount () {
    userProfile = getProfile();
    const { challengeId, problemId } = this.props.match.params;
    challengeIdentifier = challengeId;
    this.getProblemDetails(challengeId, problemId).then((data)=> {});
  }

  async getProblemDetails(challengeId, problemId) {
    const challengeDetailEndpoint = `playground/challenge/${challengeId}`;
    Http.get({endpoint: challengeDetailEndpoint}).then((data) => {
      console.log("xxxx", data);
      this.setState({problemDetails: _find(data.problems, (problem) => problem._id === problemId), userId: userProfile._id});
    });
  }

  render() {
    return (
      <AttemptProblem challengeId={challengeIdentifier} problemDetails={this.state.problemDetails} userId={this.state.userId}/>
    );
  }
}
