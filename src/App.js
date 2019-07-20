import React, { Component } from "react";
import { UserProvider } from "./user-context";
import Routes from "./router";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="full-height">
        <UserProvider>
          <Routes />
        </UserProvider>
      </div>
    );
  }
}
