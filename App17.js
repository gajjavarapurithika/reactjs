import React,{Component} from 'react';
class App extends Component
{
  constructor()
  {
    super();
    this.state={displayBio:false};
    console.log('Component this',this);
    this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
 }
 toggleDisplayBio()
 {
  this.setState({displayBio:! this.state.displayBio});
 }
 render()
 {
  return(
    <div>
      <h1>Welcome</h1>
      {
        this.state.displayBio?
        (
          <div>
            <p><h4>....................</h4></p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
        ):(
          <div>
            <button onClick={(this.toggleDisplayBio)}>Read  More</button>
            </div>
        )
      }
    </div>
  )
 }
}
export default App;