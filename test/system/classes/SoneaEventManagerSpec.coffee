should = require 'should'
path = require 'path'
SoneaSystem = require path.join process.cwd(), 'lib/system'

soneaEventManager = new SoneaSystem.SoneaEventManager
EVENTNAME = 'test'

describe 'SoneaEventManager', ->
    before ->
        event = soneaEventManager.addEvent EVENTNAME
        event.on (fn, done) ->
            fn?(EVENTNAME)
            done?()
            
    it "should emit #{EVENTNAME} Event", (done) ->
        event  = soneaEventManager.getEvent EVENTNAME
        event.emit (val) ->
            val.should.be.eql EVENTNAME
        ,done