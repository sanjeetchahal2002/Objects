const invert = require('../invert.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

const invertedObj = invert(testObject);
console.log(invertedObj);