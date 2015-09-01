# module
Sonea = require './system/Sonea'

# instantiating and exposing
#module.exports = new Sonea()

# For testing (or convencience...)
#module.exports.Sonea = Sonea

exports = module.exports = Sonea

exports.start = (target, config={}, callback=(->)) ->
  sonea = new Sonea target
  sonea.start config, (err) ->
    callback err, sonea 
  
exports.bootstrap = (target, config={}, callback=(->)) ->
  sonea = new Sonea target
  sonea.bootstrap config, (err) ->
    callback err, sonea
  