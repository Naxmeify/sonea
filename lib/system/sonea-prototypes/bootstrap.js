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
    
    if (this.validSoneaApplication) {
        this.configureExpress();
        // BOOTSTRAP APPS
        this.bootstrapApps(function(err) {
            callback(null, self);
        });
    }
    else {
        callback(new Error('No sonea application'), null);
    }
};