var Sonea = global.Sonea;

module.exports = function(process, argv, done) {

    if(argv.help) {
        process.printHelp(require('./help'));
        done(0);
    }
    
    
    var sonea = new Sonea();
    console.log(sonea);
    
    done(0);
};