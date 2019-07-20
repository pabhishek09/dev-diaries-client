import React, { Component } from "react";
import Http from "../../../utils/http.util";
import ChallengesList from "../../../components/challenges-list/ChallengesList";
import _map from "lodash/map";
import _find from "lodash/find";
import Leaderboard from "../../../components/leaderboard/Leaderboard";
import HeaderComp from "../../../components/header/header";
import "./challenges.scss";

export default class ChallengeComponent extends Component {
  constructor() {
    super();
    this.state = {
      allChallenges: [],
      leaderboard: [],
      userOnLeaderboard: {
        rank: null,
        login: null,
        playgroundProfile: {
          score: null
        }
      }
    };
  }

  async componentDidMount() {
    const userId = "5d3018885b96ecf7463a640e";
    this.getAllChallenges().then(data =>
      this.setState({ allChallenges: data })
    );
    this.getLeaderboard().then(data => {
      const rankedUsers = _map(data, (userInfo, index) => {
        userInfo["rank"] = index + 1;
        if (userInfo.playgroundProfile.score > 100) {
          userInfo["level"] = "Gold";
        } else if (userInfo.playgroundProfile.score > 50) {
          userInfo["level"] = "Silver";
        } else {
          userInfo["level"] = "Bronze";
        }
        return userInfo;
      });
      const userOnLeaderboard = _find(rankedUsers, user => user._id === userId);
      this.setState({ leaderboard: rankedUsers });
      this.setState({ userOnLeaderboard });
    });
  }

  async getAllChallenges() {
    const allChallengesEndpoint = `playground/challenges`;
    return await Http.get({ endpoint: allChallengesEndpoint });
  }

  async getLeaderboard() {
    const leaderboardEndpoint = `playground/leaderboard`;
    return await Http.get({ endpoint: leaderboardEndpoint });
  }

  render() {
    return (
      <div>
        <HeaderComp />
        <div className="row challenges">
          <div className="left-pane col-sm-3">
            <Leaderboard
              leaderboard={this.state.leaderboard}
              userOnLeaderboard={this.state.userOnLeaderboard}
            />
          </div>
          <div className="col-sm-9">
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
