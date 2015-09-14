exports = module.exports = function(process, argv, done) {

    if(argv.help) {
        process.printHelp(exports.helpText);
        done(0);
    }
    
    done(0);
};


exports.helpText = [
  'Sonea Generate Command Line Tool!',
  '',
  'usage: sonea generate [action] [options]',
  '',
  'Generate a new component for the current sonea app',
  '',
  'options:',
  '  -h, --help         print help',
  '  -l, --loglevel     set the loglevel',
  '  -P, --profile      print duration of cli action'
];