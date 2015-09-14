# first rule: 
# it is essential that this file is called
# ==> "spec_helper" (js/coffee is unimportant)

# do something before?
# like fixtures or something?
before (done) ->
    # access to current app?
    # use: sonea <-- instance of current app
    
    # e.g. load a custom config
    sonea.loadCustomConfig
        migrate: 'drop'
        models:
            connection: 'test'
            
    # call sonea.bootstrap at the end
    sonea.bootstrap done
    
# this is essential - to close all streams etc...
after (done) ->
    # do something before stop?
    sonea.stop done
    