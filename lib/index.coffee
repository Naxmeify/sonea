# module
Sonea = require './system/Sonea'

# instantiating and exposing
#module.exports = new Sonea()

# For testing (or convencience...)
#module.exports.Sonea = Sonea

exports = module.exports = Sonea

exports.start = (target, config={}, callback=(->)) ->
  # console.log "run #{target}"
  callback null, new Sonea