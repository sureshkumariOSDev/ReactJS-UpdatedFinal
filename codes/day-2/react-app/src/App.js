import React, { createElement } from 'react'
import Welcome from './Welcome'
//import './App.css'

const App = () => {
    const welcomeElement = Welcome();
    console.log(welcomeElement)
    //<div id=''><span id=''>Hello to React</span></div>
    // const appElement = createElement('div', { id: 'mainDiv' }, welcomeElement);
    const appElement =
        (
            <div id='mainDiv'>
                {welcomeElement}
            </div>
        );
    return appElement;
}

export default App;

// const x = 13;
// x = 23;

// const arr = [1, 2, 3, 4];
// arr.push(10);
// arr[1] = 20;
// //arr = [];