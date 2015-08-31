# TODO: remove this file from here - load test with
# sonea test
before (done) ->
  require('../../').start __dirname, {}, (err, sonea) ->
    done err if err
    
    global.sonea = sonea
    done()
  
after (done) ->
  sonea.stop done