var async = require('async');

module.exports = function(app) {
    return function(config, done) {
        app.debug('load sonea application');
        async.series([
            function(next) {
                app.bootstrap(config, next);
            }
        ], done);
    };
};
