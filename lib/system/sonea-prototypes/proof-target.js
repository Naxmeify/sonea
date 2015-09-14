module.exports = function() {
    this.filePaths = {
        manifest: false,
        project: false,
        routes: false,
        config: false,
        application: false
    };

    var fileUtils = this.utils.file;

    this.filePaths.manifest = fileUtils.checkPath(this.path.resolve(this.target, 'package.json'));
    

    if (this.filePaths.manifest) {
        this.manifest = require(this.filePaths.manifest);
        this.filePaths.project = fileUtils.checkPath(this.path.resolve(this.target, this.manifest.name));
        
        if(this.filePaths.project) {
            this.filePaths.routes = fileUtils.checkPath(this.path.resolve(this.filePaths.project, 'routes'), ['.js', '.coffee']);
            this.filePaths.application = fileUtils.checkPath(this.path.resolve(this.filePaths.project, 'application'), ['.js', '.coffee']);
            if(this.filePaths.routes && this.filePaths.application) {
                this.isProject = true;
                this.log.info("Found sonea project application");
                return true;
            }
        } else {
            this.filePaths.config = fileUtils.checkPath(this.path.resolve(this.target, 'config'));
            
            if(this.filePaths.config) {
                this.isApplication = true;
                this.log.info("Found sonea application");
                return true;
            }
        }
    }

    this.log.error(this.filePaths);
    this.log.error('No sonea application');
    return false;
};