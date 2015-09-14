module.exports = function() {
  this.proofTarget = this._.bind(this.proofTarget, this);
  
  this.configureExpress = this._.bind(this.configureExpress, this);
  this.loadCustomConfig = this._.bind(this.loadCustomConfig, this);
  
  this.bootstrap = this._.bind(this.bootstrap, this);
  this.start = this._.bind(this.start, this);
  this.stop = this._.bind(this.stop, this);
};