var async = require('async');

module.exports = function(app) {
    return function(config, done) {
        app.debug('start sonea application');
        async.series([
            function(next) {
                app.load(config, next);
            },
            function(next) {
                app.debug('listen sonea application to %s', app.config.host());
                app.server.listen(app.config.port, app.config.ip, function(err) {
                    if(err) {
                        return next(err);
                    }
                    
                    if(app.log) {
                        app.log.info("Application running on %s", app.config.host());
                    } else {
                        console.log("Application running on %s", app.config.host());
                    }
                    
                    return next();
                });
            }
        ], done);
    };
};
