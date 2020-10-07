import React, { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Hero from '../components/Hero';
import PersonData from '../components/PersonData';
import './App.css';

function App() {
  console.log('[App] rendered')
  // const compObj = new PersonData();
  // compObj.render();
  //reference to -->{show:true}, func to update that JS object (state)
  //return [reference,function]
  /**
   * function useState(state){
   * let js = state;
   * const update=()=>{
   *   
   * }
   * retun  [js,update]
   * }
   */

  //const [showState, setShowState] = useState({ show: true, num: 0 });
  const [showState, setShowState] = useState(true);
  const [numState, setNumState] = useState(10);

  const updateShowHandler = () => {
    // setShowState((currentState) => {
    //   return !currentState;
    // })
    // setShowState((currentState) => {
    //   return {
    //     ...currentState,
    //     show: !currentState.show
    //   }
    // })
    setShowState(cs => {
      return !cs;
    });
  }

  const updateNumHandler = () => {
    setNumState(cs => cs + 1);
  }
  return (
    <div className="App">
      
      <button onClick={updateShowHandler}>ShowOrHide</button>
       {
        showState ? <PersonData /> : 'NA'
      }
      {/* <ErrorBoundary> */}
      <Hero heroName={'Batman'} />
      {/* <Hero heroName={'Joker'} /> */}
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
