describe.skip 'SoneaEventManager', ->
    
    #should = require 'should'
    #path = require 'path'
    #SoneaSystem = require path.join process.cwd(), 'lib/system'
    
    #soneaEventManager = new SoneaSystem.SoneaEventManager
    EVENTNAME = 'test'
    
    #event = null
    before ->
        event = soneaEventManager.addEvent EVENTNAME
        event.on (val, fn) ->
            should.exist val
            fn?(val)
    
    it "should get the #{EVENTNAME} event", ->
        event.should.be.eql soneaEventManager.getEvent EVENTNAME
        
    describe 'SoneaEvent', ->
        it 'should hold the event manager', ->
            event.manager.should.be.eql soneaEventManager
            
        it "should emit the #{EVENTNAME} event", (done) ->
            event.emit EVENTNAME, ->
                done()
                
        it "should have multiple listner", (done) ->
            event.on (val) ->
                val.should.be.eql 'second'
            
            event.emit 'second', (val) ->
                val.should.be.eql 'second'
                done()
        