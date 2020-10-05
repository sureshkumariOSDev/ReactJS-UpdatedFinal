function userInput() {
    var firstNameSpan = document.createElement('span');
    firstNameSpan.innerHTML = "Enter first name: ";

    var lastNameSpan = document.createElement('span');
    lastNameSpan.innerHTML = "Enter last name: ";

    var firstNameInput = document.createElement('input', { type: 'text' });
    var lastNameInput = document.createElement('input', { type: 'text' });

    var firstNameDiv = document.createElement('div');
    firstNameDiv.appendChild(firstNameSpan);
    firstNameDiv.appendChild(firstNameInput);

    var lastNameDiv = document.createElement('div');
    lastNameDiv.appendChild(lastNameSpan);
    lastNameDiv.appendChild(lastNameInput);

    var userInputDesign = document.createElement('div');
    userInputDesign.appendChild(firstNameDiv);
    userInputDesign.appendChild(lastNameDiv);

    return userInputDesign;
}