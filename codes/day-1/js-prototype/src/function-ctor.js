/**
 * 
 *function Object(){
     
 }
 */

//3. constructor function
function person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var objectProtoRef = Object.prototype;
console.log(objectProtoRef) //{ constructor:Object(), __proto__:NULL}

//1. use proptotype property of the function 
var personProtoRef = person.prototype;
console.log(personProtoRef)//{ constructor:person(fname,lname), __proto__:Object.prototype}


var joydipRef = new person('joy', 'mon');
//joydipRef --> { __proto__:person.prototype, firstName:'joy','lastName':'mon',fullName:function(){}}