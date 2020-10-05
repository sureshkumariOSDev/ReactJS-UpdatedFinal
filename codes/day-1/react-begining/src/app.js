//component: app
function app() {
    //var userInputElement = userInput();
    // var personDetailElement = personDetails();

    var userInputComponentObj = new userInput();
    var userInputElement = userInputComponentObj.render();
    
    var completeDesign = document.createElement('div');
    completeDesign.appendChild(userInputElement);
    //completeDesign.appendChild(personDetailElement);
    return completeDesign;
}