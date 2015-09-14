module.exports = (done) ->
    # this method is called 
    # after sonea.bootstrap and before sonea.start
    
    # bootstrap whatever you want
    # and call done if finish
    
    # you have access to models, services, etc
    # @Model.create, @Model.find, etc
    # @Service.serviceAction, etc
    
    # you do not have to require models, services, etc
    # it used an inner scope of this
    
    # this = current instance of this app = sonea
    
    done()