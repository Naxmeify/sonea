var indexOf = require("./index-of");

var moduleKeywords = ['extended', 'included'];

var Module = null;

module.exports = Module = (function() {
    function Module() {}

    Module.extend = function(obj) {
        var key, ref, value;
        for (key in obj) {
            value = obj[key];
            if (indexOf.call(moduleKeywords, key) < 0) {
                this[key] = value;
            }
        }
        if ((ref = obj.extended) != null) {
            ref.apply(this);
        }
        return this;
    };

    Module.include = function(obj) {
        var key, ref, value;
        for (key in obj) {
            value = obj[key];
            if (indexOf.call(moduleKeywords, key) < 0) {
                this.prototype[key] = value;
            }
        }
        if ((ref = obj.included) != null) {
            ref.apply(this);
        }
        return this;
    };

    return Module;

})();