var Sonea = global.Sonea;

describe("Sonea Index", function() {
    it("should have a property manifest", function() {
        Sonea.should.have.a.property('manifest');
    });


    it("should have a method bootstrap", function() {
        Sonea.should.have.a.property('bootstrap');
        Sonea.bootstrap.should.be.a.Function;
    });

    it("should have a method start", function() {
        Sonea.should.have.a.property('start');
        Sonea.start.should.be.a.Function;
    });

    it("should have a method stop", function() {
        Sonea.should.have.a.property('stop');
        Sonea.stop.should.be.a.Function;
    });

});