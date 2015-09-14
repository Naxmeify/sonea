var minimist = require('minimist');
var minimistConfig = {
  'stopEarly': false,
  '--': true,
  'string': [
    'port',
    'ip'
  ],
  'boolean': [
    'help',
    'version',
    'profile',
    'skip-bootstrap',
    'verbose',
  ],
  'alias': {
    'v': 'version',
    'h': 'help',
    'p': 'port',
    'i': 'ip',
    'b': 'skip-bootstrap'
  },
  'default': {
    'h': false,
    'v': false,
    'profile': false,
    'b': false,
    'verbose': false
  }
};
    
module.exports = function argv(process) {
  return minimist(process.argv.slice(2), minimistConfig);
};