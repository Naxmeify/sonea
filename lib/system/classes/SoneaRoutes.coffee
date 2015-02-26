# Routes / Routers / Route

# deps
_               = require 'lodash'
SoneaModule     = require './SoneaModule'

module.exports = class SoneaRoutes extends SoneaModule
    
    routes: {}
    lastScope: ''
    currentScope: ''
    
    constructor: () ->
        @init()
        
    sureTarget: (target)->
        target = @currentScope+target
        target
        
    defineRoute: (target, opts={}) ->
        target=@sureTarget(target)
        @routes[target] = new SoneaRoute target, opts
        @
        
    root: (opts={}) ->
        @get '/', opts
        
    get: (target, opts={}) ->
        opts.method = 'GET'
        @defineRoute target, opts
        
    post: (target, opts={}) ->
        opts.method = 'POST'
        @defineRoute target, opts
        
    put: (target, opts={}) ->
        opts.method = 'PUT'
        @defineRoute target, opts
        
    patch: (target, opts={}) ->
        opts.method = 'PATCH'
        @defineRoute target, opts
        
    delete: (target, opts={}) ->
        opts.method = 'DELETE'
        @defineRoute target, opts
        
    scope: (path, opts={}, cb) ->
        cb = opts if typeof opts is 'function'
        @lastScope = @currentScope
        @currentScope += path
        cb?()
        @currentScope = @lastScope
        
    resource: (model, opts, cb) ->
        console.log 'ressources'

class SoneaRoute extends SoneaModule
    opts: {}
    subroutes: []
    
    constructor: (@path, opts) ->
        @opts = _.merge @opts, opts
    
    getTarget: ->
        @opts.to