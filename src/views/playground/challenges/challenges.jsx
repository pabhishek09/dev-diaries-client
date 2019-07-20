import React, { Component } from "react";
import Http from "../../../utils/http.util";
import ChallengesList from "../../../components/challenges-list/ChallengesList";
import HeaderComp from "../../../components/header/header";
import "./challenges.scss";

export default class ChallengeComponent extends Component {
  constructor() {
    super();
    this.state = {
      allChallenges: []
    };
  }

  async componentDidMount() {
    await this.getAllChallenges().then(data =>
      this.setState({ allChallenges: data })
    );
  }

  async getAllChallenges() {
    const allChallengesEndpoint = `playground/challenges`;
    return await Http.get({ endpoint: allChallengesEndpoint });
  }

  render() {
    return (
      <div>
        <HeaderComp />
        <div className="row no-side-margin">
          <div className="offset-sm-2 col-sm-8">
            <div className="challenges-text">
              <span className="challenge-span">Challenges</span>
            </div>
            <ChallengesList challenges={this.state.allChallenges} />
          </div>
        </div>
      </div>
    );
  }
}
