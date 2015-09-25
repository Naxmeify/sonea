var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command help", function() {
    it("should respond exit code 0 (for help cmd)", function(done) {
        SoneaCLICall(['', '', 'help'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    
    it("should respond exit code 0 (for help flag)", function(done) {
        SoneaCLICall(['', '', '--help'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
});
