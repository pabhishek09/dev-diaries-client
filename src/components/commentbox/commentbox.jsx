import React, { Component } from "react";
import "./commentbox.scss";

export default class Qabox extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div class="commentbox-container">
        <div class="comment">
          <div class="profile">asdas</div>
          <div class="tetxbox">
            <input type="text" />
          </div>
        </div>
        <div class="comment">
          <button class="submit" />
        </div>
      </div>
    );
  }
}
