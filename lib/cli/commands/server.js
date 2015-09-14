var Sonea = global.Sonea;

exports = module.exports = function(process, argv, done) {

    Sonea.start(process.cwd(), {}, function(err, sonea) {
        if (err || !sonea) {
            done(1);
        }
        else {
            sonea.on('stop', function() {
                done(0);
            });
        }
    });
};


exports.helpText = [
    'Sonea Start Command Line Tool!',
    '',
    'usage: sonea start [options]',
    '',
    'Start the current sonea app',
    '',
    'options:',
    '  -h, --help         print help',
    '  -l, --loglevel     set the loglevel',
    '  -p, --port         set the port for listen',
    '  -i, --ip           set the ip/host for listen',
    '  -P, --profile      print duration of cli action'
];