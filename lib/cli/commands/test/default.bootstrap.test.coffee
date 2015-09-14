Log = require 'winston'
Log.cli()

before (done) ->
  # Custom Output
  Log.info "Use default bootstrapper"
  Log.info "Target: #{process.cwd()}"
  
  # Place between log and result
  console.log()
  console.log()
  
  require('../../../').start process.cwd(), {}, (err, sonea) ->
    done err if err
    
    global.sonea = sonea
    done()
  
after (done) ->
  sonea.stop done