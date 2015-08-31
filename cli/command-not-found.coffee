Log = require 'winston'

# TODO: extend this list
correctionList = 
  start: [
    'tart'
    'satrt'
    'star'
    'st'
    'ss'
  ]
  
  console: [
    'cnosole'
    'cs'
    'co'
  ]
  
searchInCorrectionList = (cmd) ->
  for key, items of correctionList
    for item in items
      if cmd is item
        return Log.info "Did you mean #{key} instead of #{cmd}"
        
module.exports = (argv, done) ->
  Log.warn "Command #{argv._[0]} not found"
  searchInCorrectionList argv._[0]
  done()