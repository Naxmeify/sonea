path = require 'path'
winston = require 'winston'

winston.loggers.add 'sonea',
  console:
    level: 'silly'
    colorize: true
    label: 'sonea'

  file:
    filename: path.join process.cwd(), 'logs/sonea.log'