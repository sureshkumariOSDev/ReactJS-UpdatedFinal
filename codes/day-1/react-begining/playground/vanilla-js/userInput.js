//component: userInput
//element: 
function userInput() {

    this.componentData = {
        person: {
            fname: 'NA',
            lname: 'NA'
        }
    };

    this.__proto__.updateFirstName = this.__proto__.updateFirstName.bind(this);
    this.__proto__.updateLastName = this.__proto__.updateLastName.bind(this);

    this.render = function () {
        console.log(this)

        var firstNameSpan = document.createElement('span');
        firstNameSpan.innerHTML = "Enter first name: ";

        var lastNameSpan = document.createElement('span');
        lastNameSpan.innerHTML = "Enter last name: ";

        var firstNameInput = document.createElement('input');
        firstNameInput.addEventListener('change', this.__proto__.updateFirstName);

        var lastNameInput = document.createElement('input');
        lastNameInput.addEventListener('change', this.__proto__.updateLastName);

        var firstNameDiv = document.createElement('div');
        firstNameDiv.appendChild(firstNameSpan);
        firstNameDiv.appendChild(firstNameInput);

        var lastNameDiv = document.createElement('div');
        lastNameDiv.appendChild(lastNameSpan);
        lastNameDiv.appendChild(lastNameInput);

        var buttonElement = document.createElement('input');
        buttonElement.value = 'Add';
        buttonElement.type = 'button';

        var ref = this;
        var personDetail = null;
        buttonElement.addEventListener('click', function () {
            var data = ref.componentData.person;
            personDetail = personDetails(data);
            if (personDetail !== null)
                userInputDesign.appendChild(personDetail);
        });

        var userInputDesign = document.createElement('div');
        userInputDesign.appendChild(firstNameDiv);
        userInputDesign.appendChild(lastNameDiv);
        userInputDesign.appendChild(buttonElement);

        //element: userInputDesign;
        return userInputDesign;
    }
}

userInput.prototype.updateFirstName = function (eventObj) {
    console.log(this)
    var newCopy = Object.create({}, this.componentData)
    newCopy = {
        person: { fname: eventObj.target.value, lname: 'NA' }
    };
    this.componentData = newCopy;
    console.log(this.componentData)
}
userInput.prototype.updateLastName = function (eventObj) {
    console.log(this)
    var newCopy = Object.create({}, this.componentData)
    newCopy = {
        person: { fname: this.componentData.person.fname, lname: eventObj.target.value }
    };
    this.componentData = newCopy;
    console.log(this.componentData)
}