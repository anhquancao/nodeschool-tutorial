var map = require('through2-map');
var http = require('http');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method === "POST") {
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else{
        return res.end('Please send me a POST');
    }
});

server.listen(port);