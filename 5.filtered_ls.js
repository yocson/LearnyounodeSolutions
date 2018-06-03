var dir = process.argv[2];
var ext = process.argv[3];
var path = require('path')
var fs = require('fs')
var os = require('os')

fs.readdir(dir, function(err, list){
	if (err) {
		return console.log(err);
	}
	list.forEach(function(file) {
		if (path.extname(file) === '.' + ext) {
			var buf = fs.readFile(dir + '/' + file, 'utf8', function(err, buf){
				console.log(file);
			});
		} 
	}) 
});
