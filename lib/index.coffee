console.log 'Load System'
system = require './system'

console.log 'Load Application Loader'
loader = require './loader'

exports.run = (applicationFolderPath) ->
    loader applicationFolderPath