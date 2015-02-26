fs      = require 'fs'
path    = require 'path'

Log     = require('winston').loggers.get global.SONEA_CONSTANTS.NAME

exports.Loader = (targetPath) ->
  Log.debug 'Loading: '+targetPath
  requiredFiles = {}
  fs.readdirSync(targetPath).forEach (file) ->
    if file.match(/.+\.js/g) isnt null or file isnt 'index.coffee' or file isnt 'index.js'
      name = file.replace '.js', ''
      name = name.replace '.coffee', ''
      Log.debug 'Require: '+path.join targetPath, file
      requiredFiles[name] = require path.join targetPath, file

  requiredFiles
