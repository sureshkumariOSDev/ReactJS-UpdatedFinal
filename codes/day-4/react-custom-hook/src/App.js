import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter value={10} />
      <br />
      <HoverCounter data={10} />
    </div>
  );
}

export default App;
