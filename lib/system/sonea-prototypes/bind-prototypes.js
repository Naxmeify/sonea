module.exports = function() {
  this.proofTarget = this._.bind(this.proofTarget, this);
  this.initialize = this._.bind(this.initialize, this);
  
  this.configureExpress = this._.bind(this.configureExpress, this);
  this.loadCustomConfig = this._.bind(this.loadCustomConfig, this);
  
  this.loadApps = this._.bind(this.loadApps, this);
  
  this.bootstrap = this._.bind(this.bootstrap, this);
  this.bootstrapApps = this._.bind(this.bootstrapApps, this);
  this.start = this._.bind(this.start, this);
  this.stop = this._.bind(this.stop, this);
};