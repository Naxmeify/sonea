describe("SoneaCLI", function() {

    var tests = [{
        args: ['notexistingcommand'],
        expected: 'Command notexistingcommand not found'
    }, {
        args: ['erver'],
        expected: [
            'Command erver not found',
            'Did you mean server instead of erver'
        ]
    }];

    tests.forEach(function(test) {
        it("should reponse the expected output for '" + test.args + "' arguments", function(done) {
            global.SoneaCLIExecute(test.args, function(output) {
                if(test.expected instanceof Array) {
                    for (var i in test.expected) {
                        var expected = test.expected[i];
                        output.should.containEql(expected);
                    }    
                } else {
                    output.should.containEql(test.expected);
                }
                done();
            });
        });
    });
});