function mapObject(obj, cb) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = cb(obj[key]);
      }
    }
  
    return result;
  }
  
  module.exports = mapObject;
  