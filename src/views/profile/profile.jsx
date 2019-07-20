import React, { Component } from "react";
import ChallengesList from "../../components/challenges-list/ChallengesList";
import HeaderComp from "../../components/header/header";
import UserComp from "../../components/userComp/userComp";
import { setProfile, getProfile } from '../../utils/profile.util';
import Http from '../../utils/http.util';

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
      const authEndpoint = 'user/authenticate?code=' + finalAuthCode;
      Http.get({ endpoint: authEndpoint })
        .then((data) => {
          if (data) {
            this.setState({ userDetails: data.user[0] });
            setProfile(data.user[0]);
          }
        }, (err) => {
          console.log(err);
            window.location.replace("/login");
        })
    } else if (getProfile()) {
      this.setState({ userDetails: getProfile() })
    } else {
      window.location.replace("/login");
    }
  };

  render() {
    return (
        <div>
          <HeaderComp />
          <div className="row no-side-margin">
            <div className="offset-sm-1 col-sm-10 user-info-card">
              <UserComp userDetails={this.state.userDetails} />
            </div>
          </div>
        </div>
    );
  }
}
