module.exports = function() {
  
  this.middlewares = {
    'body-parser': [
      require('body-parser').json(),
      require('body-parser').urlencoded({extended: false})
    ],
    'cookie-parser': require('cookie-parser')(),
    'express-session': require('express-session')(this.config.session),
    'favicon': require('serve-favicon')(this.config.favicon),
    'errors': require('../mods/sonea-errors')
  };
  
  this.express.disable('x-powered-by');
  
  this.mount = this.express.use;
  
  for(var key in this.middlewares) {
    if(key === '$custom') {
      
    } else if (key === '$app') {
      
    } else {
      this.express.use(this.middlewares[key]);
    }
  }
  
};