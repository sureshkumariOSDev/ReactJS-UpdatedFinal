class userInput {
    constructor() {
        this.componentData = {
            person: {
                fname: 'NA',
                lname: 'NA'
            }
        };
        // this.updateFirstName = this.updateFirstName.bind(this);
        // this.updateLastName = this.updateLastName.bind(this);
    }
    updateFirstName = (eventObj) => {
        console.log(this)
        var newCopy = Object.create({}, this.componentData)
        newCopy = {
            person: { fname: eventObj.target.value, lname: 'NA' }
        };
        this.componentData = newCopy;
        console.log(this.componentData)
    }
    updateLastName = (eventObj) => {
        console.log(this)
        var newCopy = Object.create({}, this.componentData)
        newCopy = {
            person: { fname: this.componentData.person.fname, lname: eventObj.target.value }
        };
        this.componentData = newCopy;
        console.log(this.componentData)
    }
    render() {
        console.log(this)

        var firstNameSpan = document.createElement('span');
        firstNameSpan.innerHTML = "Enter first name: ";

        var lastNameSpan = document.createElement('span');
        lastNameSpan.innerHTML = "Enter last name: ";

        var firstNameInput = document.createElement('input');
        firstNameInput.addEventListener('change', this.updateFirstName);

        var lastNameInput = document.createElement('input');
        lastNameInput.addEventListener('change', this.updateLastName);

        var firstNameDiv = document.createElement('div');
        firstNameDiv.appendChild(firstNameSpan);
        firstNameDiv.appendChild(firstNameInput);

        var lastNameDiv = document.createElement('div');
        lastNameDiv.appendChild(lastNameSpan);
        lastNameDiv.appendChild(lastNameInput);

        var buttonElement = document.createElement('input');
        buttonElement.value = 'Add';
        buttonElement.type = 'button';

        // var ref = this;
        var personDetail = null;
        var passData = () => {
            //var data = ref.componentData.person;
            var data = this.componentData.person;
            personDetail = personDetails(data);
            if (personDetail !== null)
                userInputDesign.appendChild(personDetail);
        }
        // passData = passData.bind(this);
        buttonElement.addEventListener('click', passData);

        var userInputDesign = document.createElement('div');
        userInputDesign.appendChild(firstNameDiv);
        userInputDesign.appendChild(lastNameDiv);
        userInputDesign.appendChild(buttonElement);

        //element: userInputDesign;
        return userInputDesign;
    }
}