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
  
  when 'g' then execCmd 'generate'
  when 'generate' then execCmd 'generate'
  
  when 'n' then execCmd 'new'
  when 'new' then execCmd 'new'
  
  when 'r' then execCmd 'routes'
  when 'routes' then execCmd 'routes'
  
  when 's' then execCmd 'start'
  when 'start' then execCmd 'start'
  
  when 't' then execCmd 'test'
  when 'test' then execCmd 'test'
  
  else require('./command-not-found') argv, done