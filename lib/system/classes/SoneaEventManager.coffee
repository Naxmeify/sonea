event = require 'events'

SoneaEvent = require './SoneaEvent'

module.exports = class SoneaEventManager extends event.EventEmitter
  eventHandler: new event.EventEmitter()

  events: {}

  constructor: (@applicationContext) ->

  addEvent: (eventName) ->
    @events[eventName] = new SoneaEvent eventName, @

  getEvent: (eventName) ->
    @events[eventName]
