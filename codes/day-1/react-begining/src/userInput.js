//component: userInput
function userInput() {

    this.componentData = {
        person: {
            fname: 'NA',
            lname: 'NA'
        }
    };
    this.passDataandCreateComp = function (eventObj) {
        console.log('called')
        console.log(eventObj)
        console.log(this.componentData)
        //var dataTobePassed = null;
        // if (firstNameInput.value !== '' && lastNameInput.value !== '') {
        //     // dataTobePassed =
        //     this.componentData.person =
        //     {
        //         fname: firstNameInput.value,
        //         lname: lastNameInput.value
        //     };
        // }

        personDetail = personDetails(this.componentData.person);
        if (personDetail !== null)
            userInputDesign.appendChild(personDetail);
    }
    this.passDataandCreateComp = this.passDataandCreateComp.bind(this);

    this.render = function () {
        console.log(this.passDataandCreateComp)
        console.log(this)

        var firstNameSpan = document.createElement('span');
        firstNameSpan.innerHTML = "Enter first name: ";

        var lastNameSpan = document.createElement('span');
        lastNameSpan.innerHTML = "Enter last name: ";

        var firstNameInput = document.createElement('input');
        var lastNameInput = document.createElement('input');

        var firstNameDiv = document.createElement('div');
        firstNameDiv.appendChild(firstNameSpan);
        firstNameDiv.appendChild(firstNameInput);

        var lastNameDiv = document.createElement('div');
        lastNameDiv.appendChild(lastNameSpan);
        lastNameDiv.appendChild(lastNameInput);

        var buttonElement = document.createElement('input');
        buttonElement.value = 'Add';
        buttonElement.type = 'button';
        var personDetail = null;

        buttonElement.addEventListener('click', this.passDataandCreateComp);

        var userInputDesign = document.createElement('div');
        userInputDesign.appendChild(firstNameDiv);
        userInputDesign.appendChild(lastNameDiv);
        userInputDesign.appendChild(buttonElement);

        //element: userInputDesign;
        return userInputDesign;
    }
}