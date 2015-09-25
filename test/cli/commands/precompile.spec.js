var SoneaCLICall = global.SoneaCLICall;
    
describe("SoneaCLI Command precompile", function() {
    it("should respond exit code 0", function(done) {
        SoneaCLICall(['', '', 'precompile'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    it("should precompile assets if current cwd does contain a sonea project or app");
    it("should not precompile assets if current cwd does not contain a sonea project or app");
});