Object.prototype.printInfo = function () {
    return this.firstName + ' ' + this.lastName;
}
//{__proto__:NULL, constructor: object(), printInfo:function(){}}

function person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    // this.printInfo = function () {
    //     return this.firstName + ' ' + this.lastName;
    // }
}
//{__proto__:Object.prototype, constructor: person(fname, lname), printInfo:function(){}}
//{__proto__:Object.prototype, constructor: person(fname, lname)}

var joydip = new person('joydip', 'mondal');
//{ __proto__: person.prototype, firstName:'', lastName:'', printInfo:function(){}}
//{ __proto__: person.prototype, firstName:'', lastName:''}

console.log(joydip.hasOwnProperty('printInfo'));
console.log(person.prototype.hasOwnProperty('printInfo'))
console.log(Object.prototype.hasOwnProperty('printInfo'))
console.log(joydip.printInfo())