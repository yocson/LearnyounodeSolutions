var fs = require('fs');
var os = require('os');
var buf = fs.readFile(process.argv[2], 'utf8', function(err, buf)  {
	console.log(buf.split(os.EOL).length-1);
});
