// useState approach
import './firstHook.css';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';


function FirstHook() {
  const [count, setCount] = useState(0);

  function handleAddition() {
    setCount(count + 1);
  }

  function handleSubtraction() {
    setCount(count - 1);
  }

  const info = useContext( UserContext );
  console.log(info);
  

  return (
    <div className='firstHookBox'>
      <h1>Counter: {count}</h1>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
    </div>
  );
}

export default FirstHook;
