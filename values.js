function values(obj) {
    if (!obj || typeof obj !== 'object') {
      return [];
    }
  
    const objectValues = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] !== 'function') {
        objectValues.push(obj[key]);
      }
    }
  
    return objectValues;
  }
  
  module.exports = values;