var path = require('path');
var pug = require('pug');
var util = require('util');


module.exports = function defaultConfig (target) {
    var manifest = require(path.resolve(target, 'package.json'));
    
    return {
        manifest: manifest,
        port: process.env.PORT || 3000,
        ip: process.env.IP || null,
        
        host: function() {
            return util.format('%s:%s', (this.ip || 'localhost'), this.port);
        },
        
        express: {
            config: {
                'x-powered-by': false,
                'views': [
                    path.resolve(__dirname, 'views'),
                    path.resolve(target, 'views')
                ],
                'view engine': 'pug',
            },
            engines: {
                jade: pug.__express,
                pug: pug.__express
            }
        }
    };
};
