import React, { Component } from "react";
import ChallengesList from "../../components/challenges-list/ChallengesList";
import HeaderComp from "../../components/header/header";
import UserComp from "../../components/userComp/userComp";
import { UserConsumer } from "../../user-context";
import { setProfile } from '../../utils/profile.util';
import Http from '../../utils/http.util';

import "./profile.scss";

export default class ProfileComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(updateUser) {
    let githubAuthCode = window.location.href.split("?")[1];

    let finalAuthCode = githubAuthCode ? githubAuthCode.split("=")[1] : null;
    
    const authEndpoint = 'user/authenticate?code=' + finalAuthCode;
    Http.get({ endpoint: authEndpoint })
      .then((data) => {
        if (data) {
          this.setState({ userDetails: data.user[0] });
          setProfile(data.user[0]);
        }
      }, (err) => {
        console(err);
        if (err.response.status === 401) {
          window.location.replace("/login");
        }
      })
  };


  render() {
    return (
      <UserConsumer>
        {({ updateUser }) => (
          <div>
            <HeaderComp />
            <div className="row no-side-margin">
              <div className="offset-sm-1 col-sm-10 user-info-card">
                <UserComp userDetails={this.state.userDetails} />
                <ChallengesList challenges={this.state.allChallenges} />
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
