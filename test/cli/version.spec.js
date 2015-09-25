describe("SoneaCLI", function() {

    var tests = [{
        args: ['--version'],
        expected: global.Sonea.manifest.version
    }];

    tests.forEach(function(test) {
        it("should reponse the expected output for '" + test.args + "' arguments", function(done) {
            global.SoneaCLIExecute(test.args, function(output) {
                    output.should.containEql(test.expected);
                
                done();
            });
        });
    });
});