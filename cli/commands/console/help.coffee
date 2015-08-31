help = [
  'Sonea Console Command Line Tool!'
  ''
  'usage: sonea console [options]'
  ''
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help