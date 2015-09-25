var Sonea = global.Sonea;
var nesh = require("nesh");

exports = module.exports = function(process, argv, done) {
    var sonea = global.sonea = new Sonea(argv._[1] || process.cwd());
    sonea.bootstrap(function(err) {
      if(err) {
        
      } else {
        var opts = {
          welcome: 'WELCOME!',
          prompt: 'sonea > '
        };
        nesh.config.load();
        nesh.start(opts, function(err) {
          if ( err ) {
            nesh.log.error(err);
          }
        });
      }
    });
};

exports.helpText = [
  'Sonea Console Command Line Tool!',
  '',
  'usage: sonea console [options]',
  '',
  'Open an interactive node.js shell within sonea app',
  '',
  'options:',
  '  -h, --help         print help',
  '  -l, --loglevel     set the loglevel',
  '  -P, --profile      print duration of cli action'
];