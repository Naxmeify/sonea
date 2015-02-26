path = require 'path'
winston = require 'winston'

winston.loggers.add 'sonea',
  console:
    level: 'silly'
    colorize: true
    label: 'sonea'

  file:
    filename: path.join global.SONEA_CONSTANTS.APP_ROOT, 'logs/sonea.log'