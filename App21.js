import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <Greeting name="Bharath" age={45} occupation="software developer" />;
}

function Greeting(props) {
  return (
    <p>
      Hello, I'm {props.name}, a {props.age} years old {props.occupation}. Pleased to meet you!
    </p>
  );
}

// Updated for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
