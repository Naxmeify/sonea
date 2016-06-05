var express = require('express');
var http = require('http');
var debug = require('debug');
var _ = require('lodash');

var bootstrap = require('./app/bootstrap');
var load = require('./app/load');
var start = require('./app/start');
var stop = require('./app/stop');

var defaultConfiguration = require('./default-configuration');

module.exports = function(target, config) {
    // TODO: should module.parent the default target?
    var app = express();
    app.server = http.createServer(app);
    app.debug = debug('sonea');
    app.debug.log = console.log.bind(console);
    
    app.config = _.merge(defaultConfiguration(target), config);
    
    app.isBootstrapped = false;
    app.bootstrap = bootstrap(app);
    
    app.isLoaded = false;
    app.load = load(app);
    
    app.isStarted = false;
    app.start = start(app);
    
    app.stop = stop(app);
    
    return app;
};

