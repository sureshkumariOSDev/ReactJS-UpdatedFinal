import React from 'react';
import UserInput from '../components/UserInput';
import Welcome from '../components/Welcome';
import './App.css';

const App = () => {
  //const userInputObj = new UserInput();
  return (
    <div className="App">
      <Welcome message='Hello React JS' value={20} numbers={[1, 2, 3, 4]} />
      <br />
      {/* {userInputObj.render()} */}
      <UserInput />
    </div>
  );
}

export default App;
/**
 * const properties ={
 *    message: 'Hello React',
 *    value: 20,
 *    numbers:[1, 2, 3, 4]
 * }
 * const welcomeElement = Welcome(properties)
 */
