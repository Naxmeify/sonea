module.exports = function() {
    if(this.isProject) {
        var projectConfig = require(this.filePaths.application);
        this.loadCustomConfig(projectConfig);
    } else {
        // add the standalone app to the default project
        this.config.apps.push(this.target);
        this.routes['/'] = this.manifest.name;
    }
};