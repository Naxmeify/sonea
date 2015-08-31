#request = require('supertest') sonea.app

describe.skip "Index Route", ->
  context "Get /", ->
    it "should response 200 and body contains 'Welcome'", (done) ->
      request.get '/'
      .expect 200
      .expect (res) ->
        res.body.containsEql 'Welcome'
      .end done