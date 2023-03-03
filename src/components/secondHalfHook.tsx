import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './secondHalfHook.css';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function SecondHalfHook() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Todo | null>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleFetchData = async () => {
    try {
      console.log('API called');
      setLoading(true);
      const result = await axios.get<Todo>(
        'https://jsonplaceholder.typicode.com/todos/2'
      );
      setData(result.data);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(null);
      }
      setLoading(false);
    }      
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    setData(null);
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    const id = window.setInterval(() => {
      handleFetchData();
    }, 3000);
    setIntervalId(id);
  };

  const handleStopClick = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    setLoading(false);
    setData(null);
    setError(new Error('Interval stopped'));
  };

  return (
    <div className='secondHalfHookBox'>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <div>
          <h1>{data.title}</h1>
        </div>
      )}
      <button onClick={handleClick}>Fetch Data</button>
      <button onClick={handleStopClick}>Stop Call</button>
    </div>
  );
}

export default SecondHalfHook;
