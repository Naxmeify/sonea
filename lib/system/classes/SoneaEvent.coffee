# Event Emitter

event = require 'events'

module.exports = class SoneaEvent

  constructor: (@eventName, @manager) ->

  on: (callback) ->
    @manager.on @eventName, callback

  emit: ->
    @manager.emit @eventName