var http = require("http");
var path = require("path");

var util = require("util");
var events = require("events");

var express = require("express");
var lodash = require("lodash");
var winston = require("winston");


var soneaUtils = require('./mods/sonea-utils');

function Sonea(target) {
    
    if(!target) {
        throw new Error('No target specified');
    }
    
    this.target = target;
    
    
    events.EventEmitter.call(this);
    this._maxListeners = 0; // setMaxListeners?
    
    this.log = winston;
    
    
    // initialize
    this._ = lodash;
    this.path = path;
    this.utils = soneaUtils;
    
    this.express = express();
    this.server = http.createServer(this.express);
    
    this.bindPrototypes = this._.bind(this.bindPrototypes, this);
    this.bindPrototypes();
    
    this.isProject = false;
    this.isApplication = false;
    
    this.validSoneaApplication = this.proofTarget();
    
    if(!this.validSoneaApplication) {
        throw new Error('Specified target is not a valid sonea application');
    }
    
    this.config = {
        port: process.env.PORT || 3000
    };
    
    this.config.host = process.env.HOST || 'localhost:'+this.config.port;
    
    this.initialize();
}

util.inherits(Sonea, events.EventEmitter);

Sonea.prototype.bindPrototypes = require("./sonea-prototypes/bind-prototypes");

Sonea.prototype.proofTarget = require("./sonea-prototypes/proof-target");

Sonea.prototype.initialize = require("./sonea-prototypes/initialize");
Sonea.prototype.loadCustomConfig = require("./sonea-prototypes/load-custom-config");

Sonea.prototype.bootstrap = require("./sonea-prototypes/bootstrap");
Sonea.prototype.configureExpress = require("./sonea-prototypes/configure-express");

Sonea.prototype.start = require("./sonea-prototypes/start");
Sonea.prototype.stop = require("./sonea-prototypes/stop");

module.exports = Sonea;