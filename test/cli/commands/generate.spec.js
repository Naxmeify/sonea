var SoneaCLICall = global.SoneaCLICall;

describe("SoneaCLI Command generate", function() {
    it("should respond exit code 0", function(done) {
        SoneaCLICall(['', '', 'generate'], function(code) {
            code.should.be.eql(0);
            done();
        });
    });
    
    context("model", function() {
        it("should create a model for given name with given attributes");
    });
    context("controller", function() {
        it("should create a controller for given name with given attributes");
    });
    context("migration", function() {
        it("should create a migration for given name with given attributes");
    });
    context("view", function() {
        it("should create a view for given name");
    });
    context("custom generator", function() {
       it("should load and executed if condition is true"); 
    });
});