var appDesignElement = app();

var divElement = document.getElementById('appDesign');
divElement.appendChild(appDesignElement);

// function add(x, y) {
//     return (x + y);
// }
// var add = (x, y) => {
//     return (x + y);
// }
var add = (x, y) => (x + y);
console.log(add(10, 20));