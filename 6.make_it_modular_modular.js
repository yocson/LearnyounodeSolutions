var fs = require('fs')
var path = require('path')


module.exports = function readAndPrint(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if (err) {
            return callback(err);
        }
        var filtereddList = []
        list.forEach(function(file) {
            if (path.extname(file) === '.' + ext) {
                filtereddList.push(file);
            } 
        }) 
        callback(null, filtereddList);
    });
}




