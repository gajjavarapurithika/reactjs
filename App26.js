import react,{Component} from 'react';
class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      personGoing:true,
      numberofPersons:5,
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event)
  {
    const target=event.target;
    const value=target.type==='checkbox'?target.checked:target.value;
    const name=target.name;
    this.setState({
      [name]:value
    });
  }
  render()
  {
    return(
      <form>
        <h1>Multiple Input Controlled Form</h1>
        <label>
          IS person going:
          <input 
          name="personGoing" 
          type="checkbox" 
          checked={this.state.personGoing} 
          onChange={this.handleInputChange} />
        </label>
        <label>
          Number of persons:
          <input
          name="numberofPersons" 
          type="number" 
          checked={this.state.numberofPersons} 
          onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
export default App;