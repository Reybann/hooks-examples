import React from 'react';
import  FirstHook from './components/firstHook';
import SecondHook from './components/secondHook';
import SecondHalfHook from './components/secondHalfHook';

function App() {
  return (
    <div className="App">
      <FirstHook/>
      <SecondHook/>
      <SecondHalfHook/>
    </div>
  );
}

export default App;
