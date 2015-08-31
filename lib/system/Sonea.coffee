pkg = require '../../package.json'

class Sonea
  @manifest: pkg
  
  start: ->
  stop: (callback=(->))->
    callback()
    
  constructor: (@target, @config) ->
    
    
module.exports = Sonea