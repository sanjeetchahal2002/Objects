function defaults(obj, defaultProps) {
    if (!obj || typeof obj !== 'object') {
      return {};
    }
  
    for (const key in defaultProps) {
      if(!obj[key]){
        obj[key] = defaultProps[key]
      }
    }
  
    return obj;
  }
  
  module.exports = defaults;