Log = require 'winston'
Log.cli()

before (done) ->
  Log.info "Use default bootstrapper"
  Log.info "Target: #{process.cwd()}"
  console.log()
  console.log()
  
  require('../../../').start process.cwd(), {}, (err, sonea) ->
    done err if err
    
    global.sonea = sonea
    done()
  
after (done) ->
  sonea.stop done