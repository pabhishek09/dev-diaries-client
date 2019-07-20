import React, { Component } from "react";
import axios from "axios";
import ChallengesList from "../../components/challenges-list/ChallengesList";
import HeaderComp from "../../components/header/header";
import UserComp from "../../components/userComp/userComp";
import { UserConsumer } from "../../user-context";

import "./profile.scss";

export default class ProfileComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let githubAuthCode = window.location.href.split("?")[1];

    let finalAuthCode = githubAuthCode ? githubAuthCode.split("=")[1] : null;
    if (finalAuthCode) {
    }
    axios
      .get(`http://localhost:4000/api/user/authenticate?code=${finalAuthCode}`)
      .then(res => {
        let data = res.data;
        console.log(data.user[0]);
        if (data) {
          this.setState({ userDetails: data.user[0] });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.location.replace("/login");
        }
        console.error("Error -->: ", err);
      });
  }
  dostuff(updateUser) {
    console.log("triggered");
    updateUser(this.state.userDetails);
  }
  render() {
    return (
      <UserConsumer>
        {({ updateUser }) => (
          <div>
            <HeaderComp />
            <div className="row no-side-margin">
              <div className="offset-sm-1 col-sm-10 user-info-card">
                <UserComp userDetails={this.state.userDetails} />
                <button onClick={() => this.dostuff(updateUser)}>
                  Lets get started
                </button>
                <ChallengesList challenges={this.state.allChallenges} />
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
