var url = process.argv[2];
var http = require('http');

http.get(url, (res) => {
    res.setEncoding("utf8");
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end',() => {
        console.log(rawData.split("").length);
        console.log(rawData);
    })
});