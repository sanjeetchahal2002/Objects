function invert(obj) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    const invertedObj = {};
    for (const key in obj) {
      invertedObj[obj[key]] = key;
    }
  
    return invertedObj;
  }
  
  module.exports = invert;