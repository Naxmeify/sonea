'use strict'

fs = require 'fs'
log = require('debug')('sonea-cli')

exports.loadCommands = (cli)->
  # Get Path
  cmd_path = __dirname + '/../commands'
  # Define Walker
  walk = (path)->
    fs.readdirSync(path).forEach (file) ->
      newPath = path + '/' + file
      stat = fs.statSync(newPath)
      if stat.isFile()
        np = newPath.split('/')
        fp = np[np.length-1].split('.')
        cmd = fp[0]
        log 'command ' + cmd + ' loaded'
        require(newPath)(cli)  if /(.*)\.(js$|coffee$)/.test(file)
      else walk newPath  if stat.isDirectory()
  # Run Walker
  walk cmd_path


exports.loadAllInDir = (models_path) ->
  walk = (path) ->
    fs.readdirSync(path).forEach (file) ->
      newPath = path + '/' + file
      stat = fs.statSync(newPath)
      if stat.isFile()
        np = newPath.split('/')
        log np[np.length-1] + ' loaded'
        require newPath  if /(.*)\.(js$|coffee$)/.test(file)
      else walk newPath  if stat.isDirectory()

  walk models_path