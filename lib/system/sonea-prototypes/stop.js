module.exports = function(callback) {
    if(this._.isFunction(callback)) {
        this.server.close(callback);
    } else {
        this.server.close(function(){});
    }
};