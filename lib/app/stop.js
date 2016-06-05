module.exports = function(app) {
    return function(done) {
        return done && done();
    };
};
