var Sonea = global.Sonea;

describe("Sonea", function() {
   it("should a function", function() {
     Sonea.should.be.a.Function;
   });

    it("should load", function() {
       Sonea();
    });
});