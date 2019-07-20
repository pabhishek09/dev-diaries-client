import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import "./ProblemList.scss";
import _map from "lodash/map";

export default class ProblemList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ListGroup>
        {_map(this.props.problems, (problem, index) => {
          return (
            <ListGroup.Item key={index}>
              <div className="container row">
                <div className="right col-lg-2">
                  {" "}
                  <img
                    src={require("../../assets/chip.png")}
                    className="chip-score-img small"
                    alt="chip-logo"
                  />
                  <span className="count-text small">10</span>{" "}
                </div>
                <div className="left col-lg-10">
                  {" "}
                  <NavLink
                    className="problem-link"
                    to={`/playground/${this.props.challengeId}/${problem._id}`}
                  >
                    {problem.name}
                  </NavLink>
                  <p className="problem-desc-text">{problem.desc}</p>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
