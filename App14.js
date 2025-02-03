import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    // Corrected typo in the function name binding
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }

  forceUpdateState() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1>Example to generate random numbers</h1>
        <h3>Random Number: {Math.random()}</h3>
        <button onClick={this.forceUpdateState}>Force Update</button>
      </div>
    );
  }
}

export default App;
