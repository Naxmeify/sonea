var log = require('winston');
log.cli();
log.profile('profile');
log.stream({ start: -1 }).on('log', function(log) {
    console.log(log);
});
var Sonea = global.Sonea = require('../');
var help = require('./help');
var argsParser = require('./argv');
var commandNotFound = require('./command-not-found');

exports = module.exports = function cli(process, done) {
    var argv = argsParser(process);

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
        log.level = 'verbose';
    }
    
    if (argv.version) {
        return exports.commands.version(null, null, done);
    } 
    
    if ((argv.help && argv._.length === 0) || (argv._.length === 0)) {
        return exports.commands.help(null, null, done);
    }

    log.verbose("Start SoneaCLI");
    
    var shourtcuts = {
        c: 'console',
        g: 'generate',
        i: 'install',
        n: 'new',
        p: 'precompile',
        r: 'routes',
        s: 'server',
        t: 'test',
        h: 'help',
        v: 'version'
    };
    
    if(shourtcuts[argv._[0]]) {
        argv._[0] = shourtcuts[argv._[0]];
    }
    
    if(exports.commands[argv._[0]]) {
        exports.execCmd(process, argv, done);
    } else {
        commandNotFound(process, argv, done);
    }
};

exports.help = help;
exports.execCmd = function(process, argv, done) {
    if(argv.help) {
        process.printHelp(exports.commands[argv._[0]].helpText);
    } else {
        exports.commands[argv._[0]](process, argv, done);
    }
};
exports.commands = {
    console: require('./commands/console'),
    generate: require('./commands/generate'),
    install: require('./commands/install'),
    'new': require('./commands/new'),
    precompile: require('./commands/precompile'),
    routes: require('./commands/console'),
    server: require('./commands/server'),
    test: require('./commands/test'),
    version: function(p, a, done) {
        log.info(Sonea.manifest.version);
        done(0);
    },
    help: function(p, a, done) {
        exports.help();
        done(0);
    }
};