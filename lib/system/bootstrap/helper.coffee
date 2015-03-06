fs      = require 'fs'
path    = require 'path'

Log     = require('winston').loggers.get global.Sonea.CONSTANTS.NAME

exports.Loader = (targetPath) ->
  console.log 'Loading: '+targetPath
  requiredFiles = {}
  files = fs.readdirSync(targetPath)
  for file in files
    if file.match(/.+\.js/g) isnt null or file isnt 'index.coffee' or file isnt 'index.js'
      name = file.replace '.js', ''
      name = name.replace '.coffee', ''
      console.log 'Found: '+path.join targetPath, file
      requiredFiles[name] = require path.join targetPath, file

  requiredFiles
