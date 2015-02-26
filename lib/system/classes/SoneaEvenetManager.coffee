event = require 'events'

SoneaEvent = require './SoneaEvent'

module.exports = class SoneaEvenetManager
  eventHandler: new event.EventEmitter()

  events: {}

  constructor: (@applicationContext) ->

  addEvent: (eventName) ->
    @events[eventName] = new SoneaEvent eventName, @eventHandler

  getEvent: (eventName) ->
    @events[eventName]
