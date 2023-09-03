const pairs = require('../pairs');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const keyValuePairs = pairs(testObject);
console.log(keyValuePairs);