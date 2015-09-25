var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command test", function() {
    it("should respond exit code 0", function(done) {
        SoneaCLICall(['', '', 'test'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    it("should run tests if current cwd does contain a sonea project or app");
    it("should not run tests if current cwd does not contain a sonea project or app");
});