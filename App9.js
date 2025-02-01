import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <SI />
      </div>
    );
  }
}

class SI extends Component {
  render() {
    // Simple Interest Calculation
    const p = 5000; // Principal amount
    const t = 2;    // Time in years
    const r = 5;    // Rate of interest
    const si = (p * t * r) / 100; // Simple Interest formula

    return <p>Simple Interest: {si}</p>;  // Display the result
  }
}

export default App;