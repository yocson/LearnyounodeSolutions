var http = require('http');
var fs = require('fs')
var portNum = Number(process.argv[2]);


var server = http.createServer(function callback(request, response){
    if (request.method === 'POST')
    var map = require('through2-map')
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response)
});

server.listen(portNum);

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))