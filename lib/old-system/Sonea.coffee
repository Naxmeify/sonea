'use strict'

events = require "events"
util = require "util"

# Inherit EventEmitter Methods
module.exports = class Sonea extends events.EventEmitter
    # NodeJS Modules
    @node:
        events: events
        util: util

    # External Modules
    @_: require "lodash"
    @async: require "async"
    
    # Internal Modules
    @util: 
        classes: require "./utils/classes"
        logger: require "./utils/logger"
        fixCallback: (sonea, callback) ->
            unless callback
                callback = (err) -> sonea.log err if err
                
    @_Configuration = (sonea) ->
    @_Hooks = (sonea) ->
                
    constructor: ->
        # Call EventEmitter
        super @
        # Memory Leak Warning
        @setMaxListeners 0
        
        # Logging
        @log = Sonea.util.logger()
        
        # Config
        @Configuration = Sonea._Configuration @
        # Hooks
        @Hooks = Sonea._Hooks @
        
    # attrs
    _isShuttingDown: false
    _isStarted: false
    
    # publics
    startup: (config, callback) ->
        Sonea.util.fixCallback @, callback
        
        sonea = @
        
        Sonea.async.series [
            # TODO: (cb) -> sonea.load config, callback
            sonea.initialize
        ], (err, data) ->
            if err
                return sonea.shutdown (shutdownErr) ->
                    sonea.log shutdownErr if shutdownErr
                    callback err
        
        sonea.log "Startup successed"
        sonea.emit "startup"
        sonea._isStarted = true
        callback null, sonea
    
    shutdown: ->
        
    # privates
    load = (config, callback) ->
        sonea = @
        callback new Error 'Application has been shutted down' if sonea._isShuttingDown
        if Sonea._.isFunction config
            callback = config
            config = {} 
            
        config = config or {}
        sonea.config = Sonea._.cloneDeep config
        
        config.explicitHost = config.host if config.host
        
        sonea.on 'hooks:rcconfig:loaded', sonea.expose
        
        Sonea.async.auto 
            config: [sonea.Configuration.load]
            hooks: [
                'config'
                sonea.loadHooks
            ]
            
            
        
    loadHooks = (callback) ->
        
    initialize = (callback) ->
        Sonea.util.fixCallback @, callback
        
        # on process shutdown
        process.once "SIGUSR2", -> @shutdown -> process.pid "SIGUSR2"
        process.on "SIGINT", -> @shutdown -> process.exit
        process.on "SIGTERM", -> @shutdown -> process.exit
        process.on "exit", -> @shutdown() unless @_isShuttingDown
        
        # startup
        @startup (err) ->
            callback err if err
            
            @emit "ready"
            callback null, @
    
    bootstrap = (callback) ->
    expose = (callback) ->
        
    isValidApp = ->
        
    inspect = ->
    toString = ->
    toJSON = ->
        
    
    
    
# console.log Sonea
new Sonea().startup {}, (err, sonea) ->
    console.log err if err
    console.log sonea