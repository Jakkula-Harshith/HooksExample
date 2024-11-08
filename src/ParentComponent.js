import React, { useState } from 'react';
import useAddTwo from './hooks/useAddTwo'; 

function AddTwoComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [input, setInput] = useState(null);
  const [result, updateValue] = useAddTwo();

  const handleClick = () => {
    if (clickCount === 0) {
      updateValue(2); 
      setInput(2);
    } else if (clickCount === 1) {
      updateValue(10);
      setInput(10);
    }
    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Click me</button>
      <p>{input !== null && result !== null ? `${input}:${result}` : ''}</p>
    </div>
  );
}

export default AddTwoComponent;
