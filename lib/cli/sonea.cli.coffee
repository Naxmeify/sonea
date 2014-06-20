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
'use strict'

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