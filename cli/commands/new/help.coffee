help = [
  'Sonea New Command Line Tool!'
  ''
  'usage: sonea new [options] <target>'
  ''
  'Creates a new sonea app'
  ''
  'options:'
  '  -h, --help         print help'
  '  -l, --loglevel     set the loglevel'
  '  -P, --profile      print duration of cli action'
]

module.exports = ->
  console.log h for h in help