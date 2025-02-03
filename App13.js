import React,{Component} from 'react';
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      msg:"welcome"
    };
    this.updateSetState=this.updateSetState.bind(this);
  }
  updateSetState()
  {
    this.setState({
      msg:"You are best"
    });
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>Set State</button>
      </div>
    );
  }
}
export default App;