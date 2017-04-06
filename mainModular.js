var filter = require('./modular');

var dirname = process.argv[2];
var ext = process.argv[3];


filter(dirname, ext, (err, data) => {
    if (err) return console.log(err);
    data.forEach((filename) => {
        console.log(filename);
    })
});