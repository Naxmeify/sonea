'use strict'

module.exports = (cli)->
  cli
    .command 'generate-resource'
    .description 'generate a new module resource'
    .option '-S, --scaffold', 'Scaffolding for generate.'
    .option '-T, --skip-test', 'Skip generation of UnitTests.'
    .action ->
      console.log 'generate new module resource'
  