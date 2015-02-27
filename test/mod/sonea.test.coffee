'use strict'

root = process.cwd()
Sonea = require root + '/index.js'
config = require root + '/lib/mod/config/config'

app = null

describe "Sonea Test", ->
  describe "General Test", ->
    before (done) ->
      app = new Sonea
      done()

    it 'should have sonea as site title in opts', (done) ->
      app.opts.site.title.should.equal 'Sonea'
      done()

    it 'should have the cwd path in opts', (done) ->
      app.opts.cwd.should.equal process.cwd()
      done()

    it 'should have port process.env.PORT or config.port ('+config.port+') in opts', (done) ->
      app.opts.port.should.equal process.env.PORT or config.port
      done()

    it 'should have viewEngine jade in opts', (done) ->
      app.opts.viewEngine.should.equal 'jade'
      done()

    it 'should give me the app after start', (done) ->
      app.start ($)->
        app.should.equal $
        done()

