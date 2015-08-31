# module
#Sonea = require "./system"

# instantiating and exposing
#module.exports = new Sonea()

# For testing (or convencience...)
#module.exports.Sonea = Sonea

exports = module.exports = require './system/Sonea'

exports.start = (target, config={}, callback=(->)) ->
  console.log "run #{target}"