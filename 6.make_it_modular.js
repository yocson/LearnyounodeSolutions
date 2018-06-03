var mymodule = require('./program4.js')
var fs = require('fs')

var dir = process.argv[2];
var ext = process.argv[3];

function callback(err, list){
    if (err) {
        return err;
    }    
    list.forEach(function(file) {
        console.log(file);
    }) 
}

mymodule(dir, ext, callback);