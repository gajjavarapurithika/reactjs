import React from 'react';
import ReactDOM from 'react-dom';
const App=()=>
{
  function find()
  {
    var node=document.getElementById("node");
    var a=ReactDOM.findDOMNode(node);
    console.log(a);
    a.style.color='green';
    a.style.fontSize="x-large";
  }
  return(
  <div>
    <div id="node">DOM Node</div>
    <button onClick={find}>Click to find</button>
    </div>
  );
}
export default App