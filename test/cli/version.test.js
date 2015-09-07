var run = require("test-cli");
var stdin = run.stdin;

var Sonea = require('../..');
var cli = require("../../lib/cli");
var sonea = run.bind(null, cli);

describe("SoneaCLI", function() {
    it("should print Sonea version ("+Sonea.manifest.version+") on '--version' flag", function() {
        sonea("--version", function(stdout, stderr, code) {
            stdout.should.be.eql(Sonea.manifest.version);
            code.should.be.eql(0);
        });
    });
});