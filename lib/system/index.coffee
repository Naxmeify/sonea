# ==== reqs
path = require 'path'

# ==== Bootstrap AutoWire
console.log 'Bootstrap AutoWire'
require './bootstrap/wiring'

# ==== Bootstrap Constants
console.log 'Bootstrap Constants'
require './bootstrap/constants'

# ==== Bootstrap Default Logger Config
console.log 'Bootstrap Logger Config'
require './bootstrap/logger_config'

# ==== Bootstrap Helper
console.log 'Bootstrap Helper'
helper = require './bootstrap/helper'
global.Sonea.helper = helper

classes = helper.Loader path.join __dirname, 'classes'
global.Sonea.classes = classes

exports = module.exports = 
    helper: helper
    classes: classes

