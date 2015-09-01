pkg = require '../../package.json'

class Sonea
  @manifest: pkg
  
  bootstrap: (config={},callback=(->)) ->
    callback()
  
  start: (config={},callback=(->)) ->
    callback()
    
  stop: (callback=(->)) ->
    callback()
    
  constructor: (@target, @config) ->
    
    
module.exports = Sonea