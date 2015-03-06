# We Make use of global to wire anything for simple use
global.Sonea = 
    AutoWire: (key, fn) ->
        global.Sonea[key] = fn
        
    AutoWireOnGlobal: (key, fn) ->
        global[key] = fn

global.AutoWire = global.Sonea.AutoWire
global.AutoWireOnGlobal = global.Sonea.AutoWireOnGlobal