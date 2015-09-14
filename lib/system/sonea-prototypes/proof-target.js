module.exports = function() {
    var states = {
        manifest: false,
        project: false,
        routes: false,
        config: false,
        application: false
    };

    var fileUtils = this.utils.file;

    states.manifest = fileUtils.checkPath(this.path.resolve(this.target, 'package.json'));
    

    if (states.manifest) {
        var manifest = require(states.manifest);
        console.log(this.path.resolve(this.target, manifest.name));
        states.project = fileUtils.checkPath(this.path.resolve(this.target, manifest.name));
        
        if(states.project) {
            states.routes = fileUtils.checkPath(this.path.resolve(states.project, 'routes'), ['.js', '.coffee']);
            states.application = fileUtils.checkPath(this.path.resolve(states.project, 'application'), ['.js', '.coffee']);
            if(states.routes && states.application) {
                this.isProject = true;
                this.log.info("Found sonea project application");
                return true;
            }
        } else {
            states.config = fileUtils.checkPath(this.path.resolve(this.target, 'config'));
            
            if(states.config) {
                this.isApplication = true;
                this.log.info("Found sonea application");
                return true;
            }
        }
    }

    this.log.error(states);
    this.log.error('No sonea application');
    return false;
};