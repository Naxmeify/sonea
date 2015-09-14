module.exports = function() {
    if(this.isProject) {
        var projectConfig = require(this.filePaths.application);
        this.loadCustomConfig(projectConfig);
    } else {
        // Setup Custom Project for standalone
    }
};