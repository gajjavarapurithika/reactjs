import React, { useRef, useCallback } from 'react';

const ScrollToElement = () => {
  // Create a ref using useRef
  const myRef = useRef(null);

  // Callback to set the ref (not needed in this case, just use useRef)
  const handleClick = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>
      <div style={{ height: '1500px' }}></div>
      <div ref={myRef} style={{ height: '100px', background: 'yellow' }}>
        Scroll to this element
      </div>
    </div>
  );
};

export default ScrollToElement;
