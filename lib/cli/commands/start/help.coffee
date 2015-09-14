help = [
  'Sonea Start Command Line Tool!'
  ''
  'usage: sonea start [options]'
  ''
  'Start the current sonea app'
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -p, --port         set the port for listen'
  '  -i, --ip           set the ip/host for listen'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help