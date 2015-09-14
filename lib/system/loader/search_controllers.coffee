'use strict'

path = require 'path'

module.exports = (applicationFolderPath) ->
    controllersFolderPath = path.join applicationFolderPath, 'app/controllers'
    
    console.log 'Controllers Path at ' + controllersFolderPath
    allFiles = global.Sonea.helper.findAll controllersFolderPath
    controllers = []
    
    # Filter Controllers
    for file in allFiles
       controllers.push file if file.file.match(/.+\_controller/g)
            
    console.log controllers
    for controller in controllers
        require controller.filePath
    # Check Dependencies
    # Make Injections / AutoWire