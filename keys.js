

function keys(obj) {
    if (!obj || typeof obj !== 'object') {
      return [];
    }
  
    const objectKeys = [];
    for (const key in obj) {
        objectKeys.push(key);
    }
  
    return objectKeys;
  }
  
  module.exports = keys
  