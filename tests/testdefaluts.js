const defaults = require('../defaults.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

const defaultValues = { name: 'Unknown', alias: 'Batman' };
const objectWithDefaults = defaults(testObject, defaultValues);
console.log(objectWithDefaults);