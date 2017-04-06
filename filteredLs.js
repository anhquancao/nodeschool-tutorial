var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, (err,data) => {
    if (err) {
        return console.log(err);
    }
    var pattern = new RegExp("."+ext+"$");
    data.forEach(filename => {
        if (pattern.test(filename)){
            console.log(filename);
        }
    }); 
});