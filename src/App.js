import React, { Component } from 'react';

import Routes from './router';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="appHeight">
        <Routes />
      </div>
    )
  }
}
