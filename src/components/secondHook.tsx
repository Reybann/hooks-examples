import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './secondHook.css';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function SecondHook() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Todo | null>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get<Todo>(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      console.log('API CALLED');
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
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    setData(null);
    const id = setTimeout(() => {
      handleFetchData();
    }, 3000);
    setTimerId(id);
  };

  return (
    <div className="secondHookBox">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          {/* <p>{data.completed ? 'Completed' : 'Not completed'}</p> */}
        </div>
      )}
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default SecondHook;
