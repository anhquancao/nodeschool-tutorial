var http = require('http');
var url = require('url');

function writeJson(res, obj) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(obj));
}

var server = http.createServer((req, res) => {
    var urlObject = url.parse(req.url, true);
    if (urlObject.pathname == '/api/parsetime') {
        var isoDateStr = urlObject.query.iso;
        var date = new Date(isoDateStr);
        writeJson(res, {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
    } else if (urlObject.pathname == '/api/unixtime') {
        var isoDateStr = urlObject.query.iso;
        var date = new Date(isoDateStr);
        writeJson(res, {
            "unixtime": date.getTime()
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});


server.listen(process.argv[2]);