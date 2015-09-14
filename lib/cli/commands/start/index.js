module.exports = function(process, argv, done) {

    if(argv.help) {
        process.printHelp(require('./help'));
        done(0);
    }
    
    
    done(0);
};