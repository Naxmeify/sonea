var log = require('winston');
//log.cli();
log.profile('profile');
log.stream({ start: -1 }).on('log', function(log) {
    console.log(log);
});
var Sonea = global.Sonea = require('../');

var help = require('./help');

exports = module.exports = function cli(process, done) {
    var argv = require('./argv')(process);
    process.printHelp = help;

    process.on('exit', function(code) {
        if(code !== 0) {
            log.error("Exit with code: " + code);
            log.error("Check Sonea Documentation for more information");
        }

        if (argv.profile) {
            log.profile('profile');
        }
    });

    if (argv.verbose) {
        log.transports.console.level = 'verbose';
    }

    log.verbose("Start SoneaCLI");

    if (argv.version) {
        log.info(Sonea.manifest.version);
        return done(0);
    }

    if (argv.help && argv._.length === 0) {
        process.printHelp();
        return done(0);
    }

    if (argv._.length === 0) {
        process.printHelp();
        return done(0);
    }

    function execCmd(cmd) {
        if(argv.version) {
            process.printHelp(exports.commands[cmd].helpText);
        } else {
            exports.commands[cmd](process, argv, done);
        }
    }

    switch (argv._[0]) {
        case 'c':
        case 'console':
            execCmd('console');
            break;
            
        case 'i':
        case 'install':
            execCmd('install');
            break;

        case 'g':
        case 'generate':
            execCmd('generate');
            break;

        case 'n':
        case 'new':
            execCmd('new');
            break;

        case 'r':
        case 'routes':
            execCmd('routes');
            break;
            
        case 'p':
        case 'precompile':
            execCmd('precompile');
            break;

        case 's':
        case 'server':
            execCmd('server');
            break;

        case 't':
        case 'test':
            execCmd('test');
            break;

        default:
            require('./command-not-found')(process, argv, done);
    }

    return done(0);
};

exports.help = help;

exports.commands = {
    console: require('./commands/console'),
    generate: require('./commands/generate'),
    install: require('./commands/install'),
    'new': require('./commands/new'),
    precompile: require('./commands/precompile'),
    routes: require('./commands/console'),
    server: require('./commands/server'),
    test: require('./commands/test')
};