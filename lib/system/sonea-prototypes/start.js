module.exports = function(config, callback) {
    var self = this;
    if (this._.isFunction(config)) {
        callback = config;
    }

    if (!this._.isPlainObject(config)) {
        config = {};
    }

    if (!this._.isFunction(callback)) {
        callback = function() {};
    }
    
    this.bootstrap(config, function(err, sonea) {
        if (err) {
            callback(err, null);
        }
        else {
            self.log.info("Starting server...");
            self.server.listen(self.config.port, function(err) {
                self.log.info("Server running at port "+self.config.port);
                callback(err, self);
            });
        }
    });
};