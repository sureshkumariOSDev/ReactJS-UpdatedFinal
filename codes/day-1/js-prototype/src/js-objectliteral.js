//1. object literal syntax
var joydip = {
    //value property
    firstName: 'Joydip',
    lastName: 'Mondal',
    //functional property
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

//var fname = joydip.firstName;
//var fname = joydip['firstName'];
//console.log(fname)

for (var propertyName in joydip) {
    var value = joydip[propertyName];
    console.log(propertyName + ':' + value)
}

var fullName = joydip.fullName();
console.log(fullName)

joydip.location = 'Bangalore';
console.log(joydip['location'])