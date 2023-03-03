import React from 'react';
import  FirstHook from './components/firstHook';
import SecondHook from './components/secondHook';
import SecondHalfHook from './components/secondHalfHook';
import ThirdHook from './components/thirdHook';

function App() {
  return (
    <div className="App">
      <FirstHook/>
      <SecondHook/>
      <SecondHalfHook/>
      <ThirdHook/>
    </div>
  );
}

export default App;
