import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HackerNews } from './Live';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HackerNews></HackerNews>
      </div>
    );
  }
}

export default App;
