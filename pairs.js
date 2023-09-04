function pairs(obj) {
    if (!obj || typeof obj !== 'object') {
      return [];
    }
  
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push([key, obj[key]]);
    }
  
    return keyValuePairs;
  }
  
  module.exports = pairs;
  