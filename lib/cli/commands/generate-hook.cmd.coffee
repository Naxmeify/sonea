'use strict'

module.exports = (cli)->
  cli
    .command 'generate-hook'
    .description 'generate a new module hook'
    .option '-S, --scaffold', 'Scaffolding for generate.'
    .option '-T, --skip-test', 'Skip generation of UnitTests.'
    .action ->
      console.log 'generate new module hook'
  