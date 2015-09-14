describe "Request", ->
    context "GET /", ->
        it "should response 200", (done) ->
            SoneaRequestTest.get '/'
            .expect 200, done