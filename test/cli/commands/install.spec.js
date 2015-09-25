var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command install", function() {
    it("should respond exit code 0", function(done) {
        SoneaCLICall(['', '', 'install'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    it("should install dependencies if current cwd does contain a sonea project or app");
    it("should not install dependencies if current cwd does not contain a sonea project or app");
});