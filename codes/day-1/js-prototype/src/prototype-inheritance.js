function person(fname, lname) {
    console.log(this)
    this.firstName = fname;
    this.lastName = lname;
}
//person.prototype = {constructor:person(fname, lname), __proto__: Object.prototype}
person.prototype.printInformation = function () {
    return this.firstName + ' ' + this.lastName;
}

function trainer(fname, lname, subjectToTeach) {
    //a. applies conext to the called function (person)
    //b. invokes the function (person) immediately afetr applying the context
    person.call(this, fname, lname);

    //a. applies conext to the called function (person)
    //b. returns the contextually bound function reference
    //DOESNOT invoke the function
    // var contextuallyBoundPerson = person.bind(this,fname,lname);
    // console.log(contextuallyBoundPerson)
    // contextuallyBoundPerson();

    this.subjectToTeach = subjectToTeach;
    this.printInformation = function () {
        // var personProtoRef = person.prototype;
        // personProtoRef.printInformation()
        //a. applies conext to the called function (person.prototype.printInformation)
        //b. invokes the function (person.prototype.printInformation) immediately afetr applying the context
        //var partialInfo = person.prototype.printInformation.apply(this);
        var partialInfo = this.__proto__.printInformation.apply(this);
        return partialInfo + ' ' + this.subjectToTeach;
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype);
///new trainer(....)
//{__proto__:person.prototype}

// trainer.prototype.printInformation = function () {
//     return this.firstName + ' ' + this.lastName;
// }

//trainer.prototype = {constructor:trainer(fname, lname, subjectToTeach), __proto__: Object.prototype}

function trainee(fname, lname, subjectToLearn) {
    person.call(this, fname, lname);
    this.subjectToLearn = subjectToLearn;
    this.printInformation = function () {
        //var partialInfo = person.prototype.printInformation.apply(this);
        var partialInfo = this.__proto__.printInformation.apply(this);
        return partialInfo + ' ' + this.subjectToLearn;
    }
}
Object.setPrototypeOf(trainee.prototype, person.prototype);
//new trainee(...)
//{__proto__:person.prototype}

//trainee.prototype = {constructor:trainee(fname, lname, subjectToLearn), __proto__: Object.prototype}
// trainee.prototype.printInformation = function () {
//     return this.firstName + ' ' + this.lastName;
// }


var joydipTrainerRef = new trainer('joydip', 'mondal', 'React JS');
//{ __proto__:person.prototype, firstName:'joydip',lastName:'mondal', printInformation = function(){   return this.firstName + ' ' + this.lastName + ' ' + this.subjectToTeach; }, subjectToTeach = 'React JS' }

var sujithTraineeRef = new trainee('sujith', 'Kumar', 'React JS');
//{ __proto__:person.prototype, firstName:'joydip',lastName:'mondal', printInformation = function(){  return this.firstName + ' ' + this.lastName + ' ' + this.subjectToLearn; }, subjectToLearn = 'React JS' }

console.log(Object.prototype)
console.log(person.prototype)


//console.log(joydipTrainerRef)
//console.log(sujithTraineeRef)

var joydipInfo = joydipTrainerRef.printInformation();
var sujithInfo = sujithTraineeRef.printInformation();
console.log(joydipInfo)
console.log(sujithInfo)

console.log(trainer.prototype)
console.log(trainer.prototype === joydipTrainerRef.__proto__)
console.log(joydipTrainerRef.__proto__)

console.log(trainee.prototype)
console.log(trainee.prototype === sujithTraineeRef.__proto__)
console.log(sujithTraineeRef.__proto__)