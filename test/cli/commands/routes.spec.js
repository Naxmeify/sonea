var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command routes", function() {
    it("should respond exit code 1 for no sonea application", function(done) {
        SoneaCLICall(['', '', 'routes'], function(code) {
            code.should.be.eql(1);
            done();
        });
    });
    it("should print routes if current cwd does contain a sonea project or app");
    it("should not print routes if current cwd does not contain a sonea project or app");
});