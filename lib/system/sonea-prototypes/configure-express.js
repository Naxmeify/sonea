module.exports = function() {
  
  this.middlewares = {
    'body-parser': [
      require('body-parser').json(),
      require('body-parser').urlencoded({extended: false})
    ],
    'cookie-parser': require('cookie-parser')(),
    'express-session': require('express-session')(this.config.session),
    'favicon': require('serve-favicon')(this.config.favicon),
    'method-override': require('method-override')(),
    'errors': require('../mods/sonea-errors')
  };
  
  this.express.disable('x-powered-by');
  
  this.mount = this.express.use;
  
  for(var index in this.config.middlewares) {
    var key = this.config.middlewares[index];
    this.log.info(key);
    if(key === '$custom') {
      
    } else if (key === '$app') {
      
      this.loadApps();
      
    } else {
      this.express.use(this.middlewares[key]);
    }
  }
  
};