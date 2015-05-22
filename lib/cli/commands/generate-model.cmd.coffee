'use strict'

module.exports = (cli)->
  cli
    .command 'generate-model'
    .description 'generate a new module model'
    .option '-S, --scaffold', 'Scaffolding for generate.'
    .option '-T, --skip-test', 'Skip generation of UnitTests.'
    .action ->
      console.log 'generate new module model'
  