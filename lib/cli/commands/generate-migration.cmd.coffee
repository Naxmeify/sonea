'use strict'

module.exports = (cli)->
  cli
    .command 'generate-migration'
    .description 'generate a new module migration'
    .option '-S, --scaffold', 'Scaffolding for generate.'
    .option '-T, --skip-test', 'Skip generation of UnitTests.'
    .action ->
      console.log 'generate new module migration'
  