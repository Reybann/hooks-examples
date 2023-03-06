import React from 'react';
import  FirstHook from './components/firstHook';
import SecondHook from './components/secondHook';
import SecondHalfHook from './components/secondHalfHook';
import ThirdHook from './components/thirdHook';
import FourthHook from './components/fourthHook';
import SixthHook from './components/sixthHook';
import { UserProvider } from './context/userProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <FirstHook/>
      <SecondHook/>
      <SecondHalfHook/>
      <ThirdHook/>
      </UserProvider>
      <FourthHook x={6} y={4}/>
      <SixthHook/>
    </div>
  );
}

export default App;
