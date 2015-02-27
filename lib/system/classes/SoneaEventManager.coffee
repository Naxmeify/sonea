event           = require 'events'

SoneaEvent      = require './SoneaEvent'
SoneaModule     = require './SoneaModule'

module.exports = class SoneaEventManager extends SoneaModule
  eventHandler: new event.EventEmitter()

  events: {}

  constructor: (@applicationContext) ->

  addEvent: (eventName) ->
    @events[eventName] = new SoneaEvent eventName, @eventHandler

  getEvent: (eventName) ->
    @events[eventName]
