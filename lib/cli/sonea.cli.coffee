'use strict'

return;

# get logger
log = require('debug')('sonea-cli')
# get pkg
pkg = require '../../package.json'
# get loader
loader = require './util/loader'

# init cli
log 'init sonea cli commander'
cli = require 'commander'

# set sonea version
log 'set cli version ' + pkg.version
cli.version pkg.version

# load options
log 'load cli options'
require('./sonea.cli.options')(cli)
# load commands
log 'load cli commands'
loader.loadCommands cli

# parse arguments
log 'parse process arguments'
cli.parse process.argv