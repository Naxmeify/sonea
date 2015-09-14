var http = require("http");

var util = require("util");
var events = require("events");

var express = require("express");
var lodash = require("lodash");

function Sonea(target) {
    events.EventEmitter.call(this);
    this._maxListeners = 0; // setMaxListeners?
    
    this.target = target;
    
    // initialize
    this._ = lodash;
    this.express = express();
    this.server = http.createServer(this.express);
    
    this.bindPrototypes = this._.bind(this.bindPrototypes, this);
    this.bindPrototypes();
    this.proofTarget();
}

util.inherits(Sonea, events.EventEmitter);

Sonea.prototype.bindPrototypes = require("./sonea-prototypes/bind-prototypes");
Sonea.prototype.configureExpress = require("./sonea-prototypes/configure-express");
        
Sonea.prototype.proofTarget = require("./sonea-prototypes/proof-target");

Sonea.prototype.loadCustomConfig = require("./sonea-prototypes/load-custom-config");

Sonea.prototype.bootstrap = require("./sonea-prototypes/bootstrap");
Sonea.prototype.start = require("./sonea-prototypes/start");
Sonea.prototype.stop = require("./sonea-prototypes/stop");

module.exports = Sonea;