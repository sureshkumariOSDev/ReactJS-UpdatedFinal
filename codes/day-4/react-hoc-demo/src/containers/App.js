import React from 'react';
import ClickCounter from '../components/ClickCounter';
import HoverCounter from '../components/HoverCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClickCounter value={10} />
      <br />
      <HoverCounter data={20} />
    </div>
  );
}

export default App;
