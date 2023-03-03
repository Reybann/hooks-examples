// useState approach
import './firstHook.css';
import React, { useState } from 'react';

function FirstHook() {
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount(count + 1);
  }

  function handleSubtraction() {
    setCount(count - 1);
  }

  return (
    <div className='firstHookBox'>
      <h1>Counter: {count}</h1>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
    </div>
  );
}

export default FirstHook;
