import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Child from './Child'
import CounterContext from './CounterContext';
import Child2 from './Child2';

function App() {
  let countState = useState(0);
  return (
    
    <div className="App">
      <CounterContext.Provider value={countState}>
        <Child />
        <Child2 />
      {/* <Parent /> */}
      </CounterContext.Provider>
    </div>
    
  );
}

export default App;
