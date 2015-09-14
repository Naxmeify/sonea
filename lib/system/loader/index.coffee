'use strict'

Log = require('winston').loggers.get global.Sonea.CONSTANTS.NAME

search_controllers = require('./search_controllers')

module.exports = (applicationFolderPath) ->
    
    # Find Controllers
    controllers = search_controllers applicationFolderPath
    
    # Find Helpers
    # Find Hooks
    # Find Services
    # Find Models
    # Find Views
    
    # Load Config
    # Load Database
    # Load Bootstrap
    # Load Build
    # Load Assets
    # Load Routes
    
    # Load Locales
    
    # Wire what required
    # Execute 