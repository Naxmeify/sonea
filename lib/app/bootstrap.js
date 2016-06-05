var async = require('async');
var _ = require('lodash');

module.exports = function(app) {
    return function(config, done) {
        if(_.isFunction(config)) {
            done = config;
            config = {};
        }
        
        if(done == null) {
            done = function () {};
        }
        
        app.debug('bootstrap sonea application');
        
        _.merge(app.config, config);
        
        // Set express config
        _.forEach(app.config.express.config, function(value, key) {
            app.set(key, value); 
        });
        
        // Set express engines
        _.forEach(app.config.express.engines, function(engine, key) {
           app.engine(key, engine);
        });
        
        return done && done();
    };
};
