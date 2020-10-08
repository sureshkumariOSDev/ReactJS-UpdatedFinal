import React from 'react';
import ClickCounter from '../components/ClickCounter';
import Counter from '../components/Counter';
import HoverCounter from '../components/HoverCounter';
import Some from '../components/Some';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Some name={(name) => { return name }} /> */}
      <Counter render={
        (counterVal, increaseCounterValFunc) => {
          return <ClickCounter
            increaseCounterValue={increaseCounterValFunc}
            counterValue={counterVal}
            value={10} />
        }
      } />
      <br />
      <Counter render={(counterVal, increaseCounterValFunc) => {
        return <HoverCounter
          increaseCounter={increaseCounterValFunc}
          counter={counterVal}
          data={20} />
      }
      } />
    </div>
  );
}

export default App;
