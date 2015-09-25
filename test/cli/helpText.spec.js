describe("SoneaCLI", function() {

    var tests = [{
        args: ['--help'],
        expected: global.SoneaCLI.help.helpText
    }, {
        args: ['console', '--help'],
        expected: global.SoneaCLI.commands.console.helpText
    }, {
        args: ['generate', '--help'],
        expected: global.SoneaCLI.commands.generate.helpText
    }, {
        args: ['install', '--help'],
        expected: global.SoneaCLI.commands.install.helpText
    }, {
        args: ['new', '--help'],
        expected: global.SoneaCLI.commands.new.helpText
    }, {
        args: ['precompile', '--help'],
        expected: global.SoneaCLI.commands.precompile.helpText
    }, {
        args: ['routes', '--help'],
        expected: global.SoneaCLI.commands.routes.helpText
    }, {
        args: ['server', '--help'],
        expected: global.SoneaCLI.commands.server.helpText
    }, {
        args: ['test', '--help'],
        expected: global.SoneaCLI.commands.test.helpText
    }];

    tests.forEach(function(test) {
        it("should reponse the expected output for '" + test.args + "' arguments", function(done) {
            global.SoneaCLIExecute(test.args, function(output) {
                for (var i in test.expected) {
                    var expected = test.expected[i];
                    output.should.containEql(expected);
                }
                done();
            });
        });
    });
});