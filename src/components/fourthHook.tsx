import React, { useState, useMemo, useCallback } from 'react';
import './fourthHook.css'

type Props = {
  x: number;
  y: number;
}

function expensiveCalculation(x: number, y: number): number {
  console.log('expensive calculation');
  return x + y;
}

function FourthHook({ x, y }: Props) {
  const [count, setCount] = useState(0);

  // Using useMemo to memoize the result of the expensive calculation
  const resultMemoized = useMemo(() => expensiveCalculation(x, y), [x, y]);

  // Using useCallback to memoize the increment function
  const incrementCallback = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className='fourthHookBox'>
      <div>Result memoized: {resultMemoized}</div>
      <div>Count: {count}</div>
      <button onClick={incrementCallback}>Increment</button>
    </div>
  );
}

export default FourthHook;
