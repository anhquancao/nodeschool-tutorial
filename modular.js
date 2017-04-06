var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, callback) {
    fs.readdir(dirname, (err, data) => {
        if (err) {
            return callback(err);
        }
        var filteredFiles = [];
        data.forEach(filename => {
            if (path.extname(filename) === "." + ext) {
                filteredFiles.push(filename);
            }
        });
        callback(null, filteredFiles)
    });
}