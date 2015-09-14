module.exports = function(done) {
    var self = this;
    var bootstrapper = [];
    for (var appKey in this.apps) {
        var app = this.apps[appKey];
        bootstrapper.push(
            (function(app) {
                return function(next) {
                    if(self._.isFunction(app.bootstrap)) {
                        app.bootstrap(next);
                    } else {
                        next();
                    }
                };
            })(app));
    }

    this.async.series(bootstrapper, done);
};