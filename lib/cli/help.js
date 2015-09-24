var log = require('winston');

exports = module.exports = function printHelp(help) {
    if(!help) {
        help = exports.helpText;
    }
    
    for(var index in help) {
        log.info(help[index]);
    }
};

exports.helpText = [
  'Sonea Command Line Tool!',
  '',
  'usage: sonea [options] [command]',
  '',
  'commands:',
  '  server (s): start server of the current sonea app',
  '  test (t): run tests of the current sonea app',
  '  new (n): create a new sonea app',
  '  generate (g): generate a new component',
  '  routes (r): prints the route of the current sonea app',
  '  precompile (p): precompile assets of current sonea app',
  '  console (c): start interactive shell within sonea app',
  '  install (i): install dependencies of current sonea app',
  '',
  '  help (h): prints this helptext...',
  '',
  'Hint: Each command has its own help text',
  '      call it with "sonea <command> --help"',
  '',
  'options:',
  '  -v, --version      print Version',
  '  -h, --help         print help text',
  '  -P, --profile      print duration of cli action'
];