console.log "LOL1"
before (done) ->
  console.log "LOL2"
  require('../../').start __dirname, {}, (err, sonea) ->
    done err if err
    
    global.sonea = sonea
    done()
  
after (done) ->
  sonea.stop done
  
it "should", ->