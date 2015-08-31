minimist = require 'minimist'
minimistConfig = 
  'stopEarly': false
  '--': true
  'string': [
    'port'
    'ip'
  ]
  'boolean': [
    'help'
    'version'
    'profile'
    'skip-bootstrap'
  ]
  'alias':
    'v': 'version'
    'h': 'help'
    'p': 'port'
    'i': 'ip'
    'b': 'skip-bootstrap'
    
  'default':
    'h': false
    'v': false
    'profile': false
    'b': false
    
module.exports = minimist process.argv.slice(2), minimistConfig