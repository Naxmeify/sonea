SoneaRoutes = require '../../../lib/system/classes/SoneaRoutes'

x = module.exports = class Routes extends SoneaRoutes
    init: ->
        @get '/:any', to: 'application#index', as: 'any'
        @root to: 'application#index'
        
        @scope '/my', =>
            @scope '/your', =>
                @get '/rofl'
                @post '/lol'
        
c = new x()
console.log c.routes