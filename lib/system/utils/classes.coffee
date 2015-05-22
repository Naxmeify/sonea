'use strict'

module.exports.extend = (obj, mixin) ->
  obj[name] = method for name, method of mixin
  obj

module.exports.include = (klass, mixin) ->
  extend klass.prototype, mixin
  
moduleKeywords = ['extended', 'included']
  
module.exports.Module = class Module
  @extend: (obj) ->
    for key, value of obj when key not in moduleKeywords
      @[key] = value

    obj.extended?.apply(@)
    this

  @include: (obj) ->
    for key, value of obj when key not in moduleKeywords
      # Assign properties to the prototype
      @::[key] = value

    obj.included?.apply(@)
    this