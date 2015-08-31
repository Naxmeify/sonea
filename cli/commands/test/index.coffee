path = require 'path'
spawn = require('child_process').spawn

Log = require 'winston'


module.exports = (argv, done) ->
  if argv.help
    require('./help')()
    done()
  
  args = []
  
  Log.info "ExecPath: #{process.execPath}"
  
  # Set Mocha Path
  soneaMocha = path.resolve argv.sonea_root, 'node_modules', '.bin', 'mocha'
  Log.info "Mocha: #{soneaMocha}"
  args.push soneaMocha
  
  soneaOpts = path.resolve __dirname, 'mocha.opts'
  Log.info "OptsFile: #{soneaOpts}"
  args.push "--opts"
  args.push soneaOpts
  
  unless argv['--'].length is 0
    console.log argv['--']
    args.push arg for arg in argv['--']
  
  # at least add our bootstrap
  unless argv['skip-bootstrap']
    defaultBootstrap = path.resolve __dirname, 'default.bootstrap.test.coffee'
    args.push defaultBootstrap
  
  # add given targets
  targets = argv._.slice 1
  args.push target for target in targets
  args.push "test" if targets.length is 0
  
  # console.log args
  # console.log argv
  
  proc = spawn process.execPath, args, 
    stdio: 'inherit'
    
  proc.on 'exit', (code, signal) ->
    process.on 'exit', ->
      return done process.pid, signal if signal
      done code
  
  # terminate children.
  process.on 'SIGINT', ->
    # calls runner.abort()
    proc.kill 'SIGINT'
    # if that didn't work, we're probably in an infinite loop, so make it die.
    proc.kill 'SIGTERM'