moduleKeywords = ['extended', 'included']

module.exports = class SoneaModule
    constructor: ->
        console.log 'Sonea Module'
        
    @extend: (obj) ->
        for key, value of obj when key not in moduleKeywords
            @[key] = value
        obj.extended?.apply(@)
        @

    @include: (obj) ->
        for key, value of obj when key not in moduleKeywords
            @::[key] = value
        obj.included?.apply(@)
        @

    merge:
        extend: (obj, mixin) ->
            obj[name] = method for name, method of mixin
            obj

        include: (klass, mixin) ->
            @extend klass.prototype, mixin