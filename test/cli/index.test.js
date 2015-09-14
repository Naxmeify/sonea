var Sonea = require('../..');



describe("SoneaCLI", function() {
    it("should print Sonea version ("+Sonea.manifest.version+") on '--version' flag");
    it("should print SoneaCLI helptext on '--help' flag");
    it("should print warning if command not found");
    it("should print hint if command not found but related type fix exists");
});