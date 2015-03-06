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
bootstrapHelper = require './bootstrap/helper'

classes = bootstrapHelper.Loader path.join __dirname, 'classes'

exports = module.exports = 
    classes: classes

