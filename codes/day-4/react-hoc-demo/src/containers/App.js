import React from 'react';
import ClickCounter from '../components/ClickCounter';
import Hero from '../components/Hero';
import HoverCounter from '../components/HoverCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter value={10} />
      <br />
      <HoverCounter data={20} /> */}
      <Hero heroName={'Batman'} />
      <Hero heroName={'Joker'} />
    </div>
  );
}

export default App;
