function invert(obj) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    const invertedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        invertedObj[obj[key]] = key;
      }
    }
  
    return invertedObj;
  }
  
  module.exports = invert;