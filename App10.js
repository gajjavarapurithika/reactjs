import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { "name": "Abhishek" },
        { "name": "Sarah" },
        { "name": "Ajay" }
      ]
    };
  }

  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map(item => <List key={item.name} data={item} />)}
        </ul>
      </div>
    );
  }
}

class StudentName extends Component {
  render() {
    return (
      <div>
        <h1>Student Name Detail</h1>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return <li>{this.props.data.name}</li>;
  }
}

export default App;
