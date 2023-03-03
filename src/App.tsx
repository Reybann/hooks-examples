import React from 'react';
import  FirstHook from './components/firstHook';
import SecondHook from './components/secondHook';
import SecondHalfHook from './components/secondHalfHook';
import ThirdHook from './components/thirdHook';
import FourthHook from './components/fourthHook';

function App() {
  return (
    <div className="App">
      <FirstHook/>
      <SecondHook/>
      <SecondHalfHook/>
      <ThirdHook/>
      <FourthHook x={6} y={4}/>
    </div>
  );
}

export default App;
