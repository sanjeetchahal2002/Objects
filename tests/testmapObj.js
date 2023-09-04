const mapObject = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mappedObject = mapObject(testObject, (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(mappedObject);



