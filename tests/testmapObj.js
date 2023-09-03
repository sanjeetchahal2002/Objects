const mapObject = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

console.log("Testing mapObject function:");
const mappedObject = mapObject(testObject, (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(mappedObject);



