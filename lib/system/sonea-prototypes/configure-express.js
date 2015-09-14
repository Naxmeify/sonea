module.exports = function() {
  this.application.disable('x-powered-by');
  
  this.mount = this.application.use();
};