import React, { Component } from "react";

import "./userComp.scss";

export default class UserComp extends Component {
  constructor(props) {
    super();
    this.state = {
      userDetails: props.userDetails
    };
    console.log(props.userDetails);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userDetails && !this.props.userDetails) {
      this.setState({
        userDetails: nextProps.userDetails
      });
    }
  }
  render() {
    let userDetails = this.state.userDetails;
    return (
      <div className="row no-side-margins gitprofileinfo">
        <div className="col-sm-2 row-eq-height img-center avatar-container">
          {userDetails && (
            <img
              src={userDetails.avatar_url}
              className="user-profile-img"
              alt="dev-diaries-logo"
            />
          )}
        </div>
        <div className="col-sm-10 row-eq-height user-info-container-mp">
          {userDetails && [
            <div>
              <p className="user-name">{userDetails.login}</p>
              <a className="user-github-link" href={userDetails.html_url}>
                {userDetails.html_url}
              </a>
              <img
                src={require("../../assets/chip.png")}
                className="chip-img"
                alt="chip-logo"
              />
              <span className="user-score">
                {userDetails.playgroundProfile.score}
              </span>
              <img
                src={require("../../assets/gold-badge.png")}
                className="badge-img"
                alt="chip-logo"
              />
              <span className="user-score">
                {userDetails.playgroundProfile.level}
              </span>
            </div>
          ]}
        </div>
      </div>
    );
  }
}
