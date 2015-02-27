# Event Emitter

event = require 'events'

module.exports = class SoneaEvent

  constructor: (@eventName, @manager) ->

  on: (callback) ->
    @manager.on @eventName, =>
        callback.apply null, arguments[0]

  emit: ->
    @manager.emit @eventName, arguments