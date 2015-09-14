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

    this.bootstrap(config, function(err) {
        if (err) {
            callback(err, null);
        }
        else {
            self.server.listen(self.config.port, function(err) {
                callback(err, self);
            });
        }
    });
};