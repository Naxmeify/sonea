# Application Context
SoneaModule             = require './SoneaModule'
SoneaEventManager       = require './SoneaEventManager'


module.exports = class SoneaApplication extends SoneaModule
    controllers: {}
    models: {}
    services: {}
    helpers: {}
    plugins: {}
    
    eventManager: null
    
    constructor: (@application, @config) ->
        @eventManager = new SoneaEventManager @