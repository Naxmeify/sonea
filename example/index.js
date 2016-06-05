var sonea = require('..');
var app = sonea(__dirname);

if(!module.parent) {
    app.start();
}