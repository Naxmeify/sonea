describe("SoneaCLI", function() {

    tests = [{
        args: ['--version'],
        expected: global.Sonea.manifest.version
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