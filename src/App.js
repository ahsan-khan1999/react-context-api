import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Child from './Child'
import CounterContext from './CounterContext';

function App() {
  let countState = useState(0);
  return (
    
    <div className="App">
      <CounterContext.Provider value={countState}>
        <Child />
      {/* <Parent /> */}
      </CounterContext.Provider>
    </div>
    
  );
}

export default App;
