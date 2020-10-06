import React from 'react';
//import './Welcome.css'

function Welcome() {
    //<span id=''>Hello to React</span>
    //const welcomeElement = React.createElement('span', { id: 'spanMessage' }, 'Hello to React');
    const welcomeElement =
        (
            <span id='spanMessage'>
                Hello React JS
            </span>
        );
    return welcomeElement;
}

export default Welcome;