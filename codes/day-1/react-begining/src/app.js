function app() {
    var userInputElement = userInput();
    var personDetailElement = personDetails();

    var completeDesign = document.createElement('div');
    completeDesign.appendChild(userInputElement);
    completeDesign.appendChild(personDetailElement);
    return completeDesign;
}