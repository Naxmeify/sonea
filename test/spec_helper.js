var spawn = require("child_process").spawn;
var events = require("events");
var util = require("util");
var path = require("path");
var concatStream = require("concat-stream");

var Sonea = global.Sonea = require(path.resolve(__dirname, ".."));
var SoneaCLIPath = global.SoneaCLIPath = path.resolve(Sonea.rootDir, "lib", "cli");
var SoneaCLIExecutable = global.Sonea = path.resolve(Sonea.rootDir, "bin", "sonea");
var SoneaCLI = global.SoneaCLI = require(SoneaCLIPath);

/**
 * For testing the output of an cli call
 */
global.SoneaCLIExecute = function(args, done) {
    var proc = spawn(SoneaCLIExecutable, args);
    proc.stdout.pipe(concatStream(function(output) {
        done(output.toString("utf8"));
    }));
};

/**
 * For testing the result of an cli call
 */
global.SoneaCLICall = function(argv, done) {
    function Process(argv, done) {
        var self = this;
        this.argv = argv;
        this.cwd = function() {
            return __dirname;
        };
        this.done = done;
        events.EventEmitter.call(this);

        this.exit = function(code) {
            self.emit('exit', code);
            self.done(code);
        };
    }
    util.inherits(Process, events.EventEmitter);

    var process = new Process(argv, done);
    SoneaCLI(process, process.exit);
};

before(function() {

});

after(function() {

});