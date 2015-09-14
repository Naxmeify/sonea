exports = module.exports = function(process, argv, done) {

    if(argv.help) {
        process.printHelp(exports.helpText);
        done(0);
    }
    
    done(0);
};


exports.helpText = [
  'Sonea Test Command Line Tool!',
  '',
  'usage: sonea test [options] [targets]',
  '',
  'Run tests for the current sonea app',
  '',
  'options:',
  '  -h, --help           print help',
  '  -l, --loglevel       set the loglevel',
  '  -P, --profile        print duration of cli action',
  '  -b, --skip-bootstrap skip default test bootstrapper and use own',
  '',
  'extra:',
  '  You can give your own mocha options via cli.',
  '  after -- option you can paste any mocha cli option',
  '  e.g. "sonea test -- --reporter list"',
  ''
];