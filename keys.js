

function keys(obj) {
    if (!obj || typeof obj !== 'object') {
      return [];
    }
  
    const objectKeys = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        objectKeys.push(key);
      }
    }
  
    return objectKeys;
  }
  
  module.exports = keys
  