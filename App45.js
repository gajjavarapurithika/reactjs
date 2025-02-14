import React, { Component } from 'react';  
import { TransitionGroup, CSSTransition } from 'react-transition-group';  
import './style.css';  // Ensure you import the CSS file here

class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = { items: ['Blockchain', 'ReactJS', 'TypeScript', 'Java'] };  
    this.handleAdd = this.handleAdd.bind(this);  
    this.handleRemove = this.handleRemove.bind(this);  
  }  
  
  handleAdd() {  
    const newItem = prompt('Enter Item Name');  
    if (newItem) {  
      const newItems = this.state.items.concat(newItem);  
      this.setState({ items: newItems });  
    }  
  }  
  
  handleRemove(i) {  
    const newItems = this.state.items.slice();  
    newItems.splice(i, 1);  
    this.setState({ items: newItems });  
  }  
  
  render() {  
    const items = this.state.items.map((item, i) => (  
      <CSSTransition  
        key={i}  
        timeout={{ enter: 800, exit: 600 }}  
        classNames="example"  
      >  
        <div onClick={() => this.handleRemove(i)} className="item">  
          {item}  
        </div>  
      </CSSTransition>  
    ));

    return (  
      <div>  
        <h1>Animation Example</h1>  
        <button onClick={this.handleAdd}>Insert Item</button>  
        <TransitionGroup>  
          {items}  
        </TransitionGroup>  
      </div>  
    );  
  }  
}

export default App;