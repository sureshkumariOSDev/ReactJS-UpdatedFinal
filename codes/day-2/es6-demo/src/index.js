var { developer } = require('./developer') //{developer:developer}
var hrRef = require('./hr'); //ref to hr

// import { developer } from './developer'
// import hrRef from './hr'

var anilDeveloper = new developer('anil', 1000, 2000, 3000, 4000);
anilDeveloper.Name = 'anil gupta';
// console.log(anilDeveloper.Name)
// console.log(anilDeveloper)

var sunilHr = new hrRef('sunil', 2000, 3000, 4000, 5000);

console.log(anilDeveloper.calculateSalary())
console.log(sunilHr.calculateSalary())