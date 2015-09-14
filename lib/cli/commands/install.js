var spawn = require("child_process").spawn;

exports = module.exports = function(process, argv, done) {
  var proc = spawn('echo', ['install', '--link'], {
    cwd: process.cwd()
  });

  proc.stdout.setEncoding('utf8');
  proc.stdout.on('data', function(data) {
    var str = data.toString();
    var lines = str.split(/(\r?\n)/g);
    for (var i = 0; i < lines.length; i++) {
      // Process the line, noting it might be incomplete.
      console.log(lines[i]);
    }
  });

  proc.on('exit', function(code) {
    done(0);
  });

  proc.on('close', function(code) {
    console.log('child process exited with code ' + code);
  });
};


exports.helpText = [
  'Sonea Install Command Line Tool!',
  '',
  'usage: sonea install [option] <target>',
  '',
  'Installs dependencies of sonea app.',
  '',
  'options:',
  '  -h, --help         print help',
  '  -l, --loglevel     set the loglevel',
  '  -P, --profile      print duration of cli action'
];