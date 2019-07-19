import React, { Component } from 'react';
import Http from '../../../utils/http.util';
import ChallengesList from '../../../components/challenges-list/ChallengesList';
import './challenges.scss'

export default class ChallengeComponent extends Component {
  constructor() {
      super();
      this.state = {
        allChallenges: []
      }
  }

  async componentDidMount() {
    await this.getAllChallenges().then((data) => this.setState({allChallenges: data}));
  };

  async getAllChallenges() {
    const allChallengesEndpoint = `playground/challenges`;
    return await Http.get({endpoint: allChallengesEndpoint});
  };

  render() {
    return (
      <div className="col-sm-12">
        <ChallengesList challenges={this.state.allChallenges}/>
      </div>
    );
  }
};
