//component: app
//element: completeDesign
import React from 'react'
function App() {
    //var userInputElement = userInput();
    // var personDetailElement = personDetails();

    var userInputComponentObj = new userInput();
    var userInputElement = userInputComponentObj.render();

    //pseudo HTML element
    // var completeDesign = React.createElement('div');
    // completeDesign.appendChild(userInputElement);
    //completeDesign.appendChild(personDetailElement);
    return completeDesign;
}