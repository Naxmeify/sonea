// Main Lib File

// it exports the class
var Sonea = require('./sonea')
exports = module.exports = Sonea;

// some fast usage helper
exports.bootstrap = function(target, config, callback) {
    var sonea = new Sonea(target);
    sonea.bootstrap(config, callback);
};

exports.start = function(target, config, callback) {
    var sonea = new Sonea(target);
    sonea.start(config, callback);
};