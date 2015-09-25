var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command version", function() {
    it("should respond exit code 0 (for version cmd)", function(done) {
        SoneaCLICall(['', '', 'version'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    
    it("should respond exit code 0 (for version flag)", function(done) {
        SoneaCLICall(['', '', '--version'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
});
