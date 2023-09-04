function mapObject(obj, cb) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    const result = {};
    for (const key in obj) {
      result[key] = cb(obj[key]);
    }
  
    return result;
  }
  
  module.exports = mapObject;
  