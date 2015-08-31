pkg = require '../../package.json'

class Sonea
  @manifest: pkg
  
  constructor: (@target, @config) ->
    
    
module.exports = Sonea