var Sonea = require('../');

module.exports = function cli(process, done) {
    var argv = require('./argv')(process);
    if (argv.version) {
        process.stdout.write(Sonea.manifest.version);
        done(0);
    }

    done(0);
};