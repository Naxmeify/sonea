###
The MIT License (MIT)

Copyright (c) 2014 damn creative <info@damncreative.de>

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