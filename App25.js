import React,{Component} from 'react';
class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={value:' '};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event)
  {
    this.setState({value:event.target.value});
  }
  handleSubmit(event)
  {
    alert("You have submitted the input successfully"+this.state.value);
    event.preventDefault();
  }
  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Controlled Form Example</h1>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default App;