import React,{Component} from 'react';
class App extends Component
{
  constructor()
  {
    super();
    this.state={displayBio:true};
  }
  render()
  {
    const bio=this.state.dispalyBio?
    (
      <div>
        <p><h3>Coding is fun</h3></p>
      </div>
    ):null;
    return(
      <div>
        <h1>I like coding</h1>
        {bio}
      </div>
    );
  }
}
export default App;