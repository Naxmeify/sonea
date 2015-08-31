minimist = require 'minimist'
minimistConfig = 
  'stopEarly': false
  'string': [
    'port'
    'ip'
  ]
  'boolean': [
    'help'
    'version'
    'profile'
  ]
  'alias':
    'v': 'version'
    'h': 'help'
    'p': 'port'
    'i': 'ip'
    
  'default':
    'h': false
    'v': false
    'profile': false
    
module.exports = minimist process.argv.slice(2), minimistConfig