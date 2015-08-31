module.exports = (argv, done) ->
  if argv.help
    require('./help')()
    done()