var log = require('winston');

// TODO: extend this list
var correctionList = {
  start: [
    'tart',
    'satrt',
    'star',
    'st',
    'ss'
  ],
  
  console: [
    'cnosole',
    'cs',
    'co'
  ]
};
  
function searchInCorrectionList(cmd) {
    for(var key in correctionList) {
        var items = correctionList[key];
        for(var index in items) {
            var item = items[index];
            if(cmd === item) {
                return key;
            }
        }
    }
}
        
module.exports = function(process, argv, done) {
  log.warn("Command %s not found", argv._[0]);
  
  var key = searchInCorrectionList(argv._[0]);
  if(key && key.length > 0) {
      log.info("Did you mean %s instead of %s", key, argv._[0]);
  }
  
  return done(0);
};