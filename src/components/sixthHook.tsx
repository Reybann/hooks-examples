import React, { useRef } from 'react';
import './sixthHook.css';

function SixthHook() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(`Input value: ${inputRef.current.value}`);
    }
  };

  return (
    <div className='sixthHookBox'>
      <h1>Sixth Hook</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default SixthHook;
