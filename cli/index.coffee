argv = require './argv'
Sonea = require '..'

Log = require 'winston'
Log.cli()

done = (code=0) ->
  Log.profile 'cli' if argv.profile
  process.exit code

Log.profile 'cli' if argv.profile

if argv.version
  Log.info "Version #{Sonea.manifest.version}"
  Log.warn "Do not use version flag with commands" unless argv._.length is 0
  done()

if argv.help and argv._.length is 0
  require('./help')()
  done()

if argv._.length is 0
  require('./help')()
  done()

execCmd = (cmd) ->
  require("./commands/#{cmd}") argv, done

# TODO: when 'string' or 'string' not working

switch argv._[0].toLowerCase()
  when 'c' then execCmd 'console'
  when 'console' then execCmd 'console'
  else require('./command-not-found') argv, done