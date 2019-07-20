import React, { createContext } from "react";

const UserContext = createContext({
  user: {},
  updateUser: () => {}
});

export class UserProvider extends React.Component {
  updateUser = user => {
    console.log("UpdateUserTriggered", user);
    this.setState({ user: user });
  };

  state = {
    user: {},
    updateUser: this.updateUser
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
