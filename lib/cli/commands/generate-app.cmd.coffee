'use strict'

module.exports = (cli)->
  cli
    .command 'generate-app'
    .description 'generate a new sonea application'
    .usage '[options] [dir] [name]'
    .option '-S, --scaffold', 'Scaffolding for generate.'
    .option '-T, --skip-test', 'Skip generation of UnitTests.'
    .option '-B, --skip-npm',  'Skip run of npm after app generation.'
    .action ->
      console.log 'generate new sonea app'
