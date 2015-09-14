module.exports = function(config, callback) {
    if(this._.isFunction(config)) {
        callback = config;
    }
    
    if(!this._.isPlainObject(config)) {
        config = {};
    }
    
    if(!this._.isFunction(callback)) {
        callback = function(){};
    }
    
    
    this.server.listen(this.config.port, callback);
};