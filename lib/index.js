// Main Lib File

// it exports the class
var Sonea = require('./system/sonea');
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

exports.stop = function(target, config, callback) {
    var sonea = new Sonea(target);
    sonea.stop(config, callback);
};

var manifest = require('../package.json');
exports.manifest = manifest;

exports.rootDir = require("path").resolve(__dirname, '..');