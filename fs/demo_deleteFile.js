var fs = require('fs');
var http = require('http');
//var path = require('path');

http.createServer(function(req, res){
    var rand = Math.floor(Math.random() * 100);
    var fileName = 'resources/exclusionFile_' + rand + '.html';

    fs.writeFile(fileName, '<html><body><strong>New HTML ' + fileName + '</strong></body></html>', function(err){
        if (err) throw err;
        console.log("Included new file " + fileName + "!");

        fs.readFile(fileName, function(err, data){
            res.writeHead(200, {'Content-type':'text/html'});
            res.write(data);
            res.end();

            fs.unlink(fileName, function(err){
                if (err) throw err;//new Error('Exclusion Failed!');
                console.log('File Deleted!');
            });
        });
    });

    

    
}).listen(8080);