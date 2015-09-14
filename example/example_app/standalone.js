/**
 * This file is only used if someone wanna run this application
 * standalone.
 */
require('sonea').start(__dirname, {}, function(err, sonea) {
    if(err) {
        console.error(err);
    } else {
        console.log("Server running: " + sonea.config.host);
    }
});