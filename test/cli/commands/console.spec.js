var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command console", function() {
    it("should respond exit code 1 for no sonea application", function(done) {
        SoneaCLICall(['', '', 'console'], function(code) {
            code.should.be.eql(1);
            done();
        });
    });
    it("should open node.js cli shell if current cwd does contain a sonea project or app");
    it("should not open node.js cli shell if current cwd does not contain a sonea project or app");
});