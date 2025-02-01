import React, { Component } from "react";

class Header extends Component {
  state = {
    count: 0,
  };

  plus = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  minus = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Using class Component</h1>
        <p>Counter App</p>
        <p className="number">{this.state.count}</p>
        <button className="btn btn-1" onClick={this.plus}>
          +
        </button>
        <button className="btn btn-2" onClick={this.minus}>
          -
        </button>
      </div>
    );
  }
}

export default Header;
