should = require "should"

describe "Sonea", ->
    it "should be accessible globally", ->
        require require("path").resolve __dirname, "..", ".."
        should.exist global.Sonea