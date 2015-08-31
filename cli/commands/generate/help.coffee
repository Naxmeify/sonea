help = [
  'Sonea Generate Command Line Tool!'
  ''
  'usage: sonea generate [action] [options]'
  ''
  'Generate a new component for the current sonea app'
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help