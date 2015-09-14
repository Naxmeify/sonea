var express = require("express");

var app = express();

var ECT = require('ect');
var ectRenderer = ECT({
    watch: true,
    root: __dirname + '/views',
    ext: '.ect',
    gzip: false
});

app.disable('x-powered-by');

app.set('views', __dirname + '/views');
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'production' ? {} : err)
    });
});


module.exports = app;