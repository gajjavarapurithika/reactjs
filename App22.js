import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Js Props Validation Example</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>{JSON.stringify(this.props.propArray)}</td>
              <td>{this.props.propArray ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "True" : "False"}</td>
              <td>{this.props.propBool ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{typeof this.props.propFunc === "function" ? this.props.propFunc(5) : "Invalid Function"}</td>
              <td>{typeof this.props.propFunc === "function" ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "True" : "False"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{this.props.propNumber ? "True" : "False"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function(x) { return x + 5; },
  propNumber: 1,
  propString: "Java",
};

export default App;
