var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[index + 2], function (res) {
        res.pipe(bl(function (err, data) {
            if (err) {
                return console.err(err);
            }
            results[index] = data.toString();
            count++;

            if (count === 3) {
                printResults();
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}