var Sonea = global.Sonea;

describe("Sonea", function() {
    it("should be a Function", function() {
        Sonea.should.be.a.Function;
    });

    it("shoudl throw an error if target is not a sonea application", function() {
        (function() {
            new Sonea(__dirname);
        }).should.throw;
    });

    it("should throw an error if no target specified", function() {
        (function() {
            new Sonea();
        }).should.throw;
    });
});