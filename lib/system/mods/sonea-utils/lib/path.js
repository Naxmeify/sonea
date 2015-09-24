var path = require("path");

module.exports.isAbsolute = function(p) {
    return path.normalize(p + '/') === path.normalize(path.resolve(p) + '/');
};