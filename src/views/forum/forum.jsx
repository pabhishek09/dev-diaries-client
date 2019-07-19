import React, { Component } from "react";
import UserContext from "../../userDetails";
import Http from "../../utils/http.util";

import "./forum.scss";

export default class ForumComponent extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    await this.getQuestions();
  }
  async getQuestions() {
    const questionsEndpoint = `forum/all-questions/`;
    Http.get({ endpoint: questionsEndpoint }).then(data => {
      this.setState({
        questionDetails: data.questions
      });
    });
  }
  render() {
    return (
      <div className="center-abs">
        <h1>Welcome to the forum page of the application</h1>
      </div>
    );
  }
}
