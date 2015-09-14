var spawn = require("child_process").spawn;
var path = require("path");
var concatStream = require("concat-stream");

var Sonea = global.Sonea = require(path.resolve(__dirname, ".."));
var SoneaCLIPath = global.SoneaCLIPath = path.resolve(Sonea.rootDir, "lib", "cli");
var SoneaCLIExecutable = global.Sonea = path.resolve(Sonea.rootDir, "bin", "sonea");
var SoneaCLI = global.SoneaCLI = require(SoneaCLIPath);

global.SoneaCLIExecute = function(args, done) {
    var proc = spawn(SoneaCLIExecutable, args);
    proc.stdout.pipe(concatStream(function(output) {
        done(output.toString("utf8"));
    }));
};

before(function() {
    
});

after(function() {
    
});