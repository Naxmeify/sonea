var SoneaApplication = require('../sonea-application');

module.exports = function() {
    var self = this;
    this.apps = {};
    
    function setApp(app, key) {
        if(self.apps[key]) {
            throw new Error('Duplicate Application Expose? KEY WAS: '+ key);
        } else {
            self.apps[key] = app;
        }
    }
    
    for(var appIndex in this.config.apps) {
        var appInfo = this.config.apps[appIndex];
        var app = null;
        
        if(this._.isString(appInfo)) {
            
            if(this.defaultApps[appInfo]) {
                app = new SoneaApplication(this.defaultApps[appInfo]);
                setApp(app, app.exposeName);
            } else {
                app = new SoneaApplication(appInfo);
                setApp(app, app.exposeName);
            }
            
        } else if (this._.isPlaonObject(appInfo)) {
            if(this._.isString(appInfo.app)) {
                
                app = new SoneaApplication(appInfo.app);
                if(this._.isString(appInfo.as)) {
                    setApp(app, appInfo.as);
                } else {
                    setApp(app, app.exposeName);
                }
                
            } else {
                throw new Error('Can nott resolve app information: '+appInfo);
            }
        } else {
            throw new Error('Can nott resolve app information: '+appInfo);
        }
    }
};