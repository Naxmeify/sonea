###
The MIT License (MIT)

Copyright (c) 2014 MRW Neundorf <matt@nax.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
###
debug = require('debug')('sonea')
_ = require 'lodash'

 
class Sonea
  express: require 'express'
  path: require 'path'
  path: require 'path'
  favicon: require 'static-favicon'
  logger: require 'morgan'
  cookieParser: require 'cookie-parser'
  bodyParser: require 'body-parser'



  db: null

  opts: #defaults options
    env: process.env.NODE_ENV or 'development'
    port: process.env.PORT or 3000
    
    views: ''
    viewEngine: 'jade'


  constructor: (opts)->
    debug 'Constructor of Sonea loaded' 

    @opts = _.extend @opts, opts

    @app = @express()

    @config()


  config: ->
    $ = @

    # todo before config

    @app.use @favicon()
    @app.use @logger('dev') # '  sonea :method :url :status :res[Content-Length]b')
    @app.use @bodyParser.json()
    @app.use @bodyParser.urlencoded()
    @app.use @cookieParser()

    # 404 Error
    @app.use (req, res, next) ->
      err = new Error("Not Found")
      err.status = 404
      next err

    # 500 Error
    @app.use (err, req, res, next) ->
      res.status err.status or 500
      res.send err.message

    # todo after config

  configLocals: (locals)->
    
    app.use (req, res, next) ->
      res.locals = _.extend res.locals, locals
      next()

  start: (callback)->
    $ = @
    @app.listen @opts.port, ->
      debug 'sonea runs on port ' + $.opts.port
      if callback
        callback $

module.exports = Sonea