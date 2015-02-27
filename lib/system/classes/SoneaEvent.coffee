SoneaModule     = require './SoneaModule'

module.exports = class SoneaEvent extends SoneaModule

  constructor: (@eventName, @manager) ->

  on: (callback) ->
    @manager.eventHandler.on @eventName, =>
        callback.apply null, arguments[0]

  emit: ->
    @manager.eventHandler.emit @eventName, arguments