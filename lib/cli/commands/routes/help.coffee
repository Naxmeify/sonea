help = [
  'Sonea Routes Command Line Tool!'
  ''
  'usage: sonea routes [options]'
  ''
  'Print routes of the current sonea app'
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help