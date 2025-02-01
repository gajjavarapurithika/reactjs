import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { "name": "Abhishek" },
        { "name": "Sarah" },
        { "name": "Ajay" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Student Data</h1>
        <ul>
          {this.state.data.map((item, index) => (
            <List key={index} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <li>{this.props.data.name}</li>
    );
  }
}

export default App;
