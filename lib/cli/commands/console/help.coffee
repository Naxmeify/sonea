help = [
  'Sonea Console Command Line Tool!'
  ''
  'usage: sonea console [options]'
  ''
  'Open an interactive node.js shell within sonea app'
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help