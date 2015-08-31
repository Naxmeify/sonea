before (done) ->
  console.log "prepare"
  require('../../../').start __dirname, {}, (err, sonea) ->
    done err if err
    
    global.sonea = sonea
    done()
  
after (done) ->
  sonea.stop done