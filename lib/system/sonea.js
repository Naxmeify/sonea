var http = require("http");
var path = require("path");

var util = require("util");
var events = require("events");

var express = require("express");
var lodash = require("lodash");
var async = require("async");

var winston = require("winston");

var soneaUtils = require('./mods/sonea-utils');

function Sonea(target) {

    if (!target) {
        throw new Error('No target specified');
    }

    this.target = target;


    events.EventEmitter.call(this);
    this._maxListeners = 0; // setMaxListeners?

    this.log = winston;


    // initialize
    this._ = lodash;
    this.async = async;
    this.path = path;
    this.utils = soneaUtils;

    this.express = express();
    this.server = http.Server(this.express);

    this.bindPrototypes = this._.bind(this.bindPrototypes, this);
    this.bindPrototypes();

    this.isProject = false;
    this.isApplication = false;

    this.validSoneaApplication = this.proofTarget();

    if (!this.validSoneaApplication) {
        throw new Error('Specified target is not a valid sonea application');
    }
    
    this.defaultApps = {
        'sonea-admin': path.resolve(__dirname, 'mods', 'sonea-admin'),
        'sonea-welcome': path.resolve(__dirname, 'mods', 'sonea-welcome')
    };

    this.config = {
        port: process.env.PORT || 3000,
        
        apps: [
            'sonea-welcome',
            'sonea-admin'
        ],
        
        extensions: [
            //'cors',
            //'csrf'
        ],
        
        middlewares: [
            'cookie-parser',
            'express-session',
            'body-parser',
            'method-override',

            // sonea favicon loader - favicon can be overwritten per app
            'favicon',

            // custom global middlewares
            '$custom',

            // custom app specific middlewares
            '$app',

            // error handler
            'errors'
        ],
        
        session: {
            name: 'sonea.sid',
            secret: 'sonea.session.secret',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 3600000 }
        },
        
        favicon: this.path.resolve(__dirname, 'res', 'favicon.ico'),
    };
    
    this.routes = {
        '/admin': 'sonea-admin',
        '/welcome': 'sonea-welcome'
    };

    this.config.host = process.env.HOST || 'localhost:' + this.config.port;

    this.initialize();
}

util.inherits(Sonea, events.EventEmitter);

Sonea.prototype.bindPrototypes = require("./sonea-prototypes/bind-prototypes");

Sonea.prototype.proofTarget = require("./sonea-prototypes/proof-target");

Sonea.prototype.initialize = require("./sonea-prototypes/initialize");
Sonea.prototype.loadCustomConfig = require("./sonea-prototypes/load-custom-config");
Sonea.prototype.loadApps = require("./sonea-prototypes/load-apps");

Sonea.prototype.bootstrap = require("./sonea-prototypes/bootstrap");
Sonea.prototype.bootstrapApps = require("./sonea-prototypes/bootstrap-apps");
Sonea.prototype.configureExpress = require("./sonea-prototypes/configure-express");

Sonea.prototype.start = require("./sonea-prototypes/start");
Sonea.prototype.stop = require("./sonea-prototypes/stop");

module.exports = Sonea;