import React, { useState, useMemo } from 'react';
import './thirdHook.css'

function ThirdComponent() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const calculateSum = useMemo(() => {
    console.log('Sum calculated!');
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div className='thirdHookBox'>
      <h2>Calculate Sum with useMemo</h2>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          id="number1"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          id="number2"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>The sum is: {calculateSum}</p>
      </div>
    </div>
  );
}

export default ThirdComponent;
