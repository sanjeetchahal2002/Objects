function defaults(obj, defaultProps) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    for (const key in defaultProps) {
      obj[key] = defaultProps[key];
    }
  
    return obj;
  }
  
  module.exports = defaults;