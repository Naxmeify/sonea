var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command server", function() {
    it("should respond exit code 1 for no sonea application", function(done) {
        SoneaCLICall(['', '', 'server'], function(code) {
            code.should.be.eql(1);
            done();
        });
    });
    it("should run server if current cwd does contain a sonea project or app");
    it("should not run server if current cwd does not contain a sonea project or app");
});