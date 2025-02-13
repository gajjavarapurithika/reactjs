import React from 'react';  
import ReactDOM from 'react-dom';  
  
class App extends React.Component {  
  render() {  
    const mystyle = {  
      color: "Green",  
      backgroundColor: "lightBlue",  
      padding: "10px",  
      fontFamily: "Arial"  
    };  
    return (  
      <div>  
      <h1 style={mystyle}>Hello!</h1>  
      <p>Here, you can find all CS tutorials.</p>  
      </div>  
    );  
  }  
}  
export default App;  
