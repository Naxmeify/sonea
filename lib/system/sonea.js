var util = require("util");
var events = require("events");

var express = require("express");
var lodash = require("lodash");

function Sonea(target) {
    events.EventEmitter.call(this);
    this._maxListeners = 0;
    
    this.target = target;
    
    // initialize
    this._ = lodash;
    this.application = express();
}

util.inherits(Sonea, events.EventEmitter);

Sonea.prototype.express = require("./sonea-prototypes/express");
        
Sonea.prototype.proofTarget = require("./sonea-prototypes/proof-target");

Sonea.prototype.loadCustomConfig = require("./sonea-prototypes/load-custom-config");

Sonea.prototype.bootstrap = require("./sonea-prototypes/bootstrap");
Sonea.prototype.start = require("./sonea-prototypes/start");
Sonea.prototype.stop = require("./sonea-prototypes/stop");

module.exports = Sonea;