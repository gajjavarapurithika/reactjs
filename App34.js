import React,{Component} from 'react';
class ScrollToElement extends Component
{
  constructor(props)
  {
    super(props);
    this.myRef=React.createRef();
  }
  handleClick=()=>{
    this.myRef.current.scrollIntoView({behaviour:'smooth'});
  }
  render()
  {
    return(
      <div>
        <button onCLick={this.handleClick}>Scroll to element</button>
        <div style={{height:'500px'}}></div>
        <div ref={this.myRef} style={{height:'100px',background:'yellow'}}>Scroll to this element</div>
      </div>
    );
  }
}
export default ScrollToElement;