var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command new", function() {
    it("should respond exit code 0", function(done) {
        SoneaCLICall(['', '', 'new'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    it("should create a project if current cwd does not contain a project");
    it("should create an app if current cwd does contain a project");
    context("with --standalone option", function() {
        it("should create an app also if current cwd does contain a project");
    });
});