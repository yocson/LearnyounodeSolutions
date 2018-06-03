var http = require('http');
var url = require('url');
var portNum = Number(process.argv[2]);

var getTime = function(time) {
    var date = new Date(Date.parse(time));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

var getUnixTime = function(time) {
    return {
        unixtime: Date.parse(time)
    }
}

var server = http.createServer(function callback(request, response){
    if (request.method === 'GET'){
        var urlObject = url.parse(request.url, true);
        var pathname = urlObject.pathname;
        var time = urlObject.query.iso;

        var res;
        if (pathname === '/api/parsetime') {
            res = getTime(time);
        }

        if (pathname === '/api/unixtime') {
            res = getUnixTime(time);
        }

        if (res) {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(res));
        }
    }
});

server.listen(portNum);


// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//     return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//     }
// }

// function unixtime (time) {
//     return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true)
//     var time = new Date(parsedUrl.query.iso)
//     var result

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))