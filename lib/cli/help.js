var log = require('winston');

var help = [
  'Sonea Command Line Tool!',
  '',
  'usage: sonea [options] [command]',
  '',
  'commands:',
  '  start (s): start the current sonea app',
  '  test (t): run tests of the current sonea app',
  '  new (n): create a new sonea app',
  '  generate (g): generate a new component',
  '  routes (r): prints the route of the current sonea app',
  '  console (c): start interactive shell within sonea app',
  '',
  'Hint: Each command has its own help text',
  '      call it with "sonea <command> --help"',
  '',
  'options:',
  '  -v, --version      print Version',
  '  -h, --help         print help text',
  '  -P, --profile      print duration of cli action'
];

module.exports = function printHelp() {
    for(var index in help) {
        log.info(help[index]);
    }
};