var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    //route file/
    var q = url.parse(req.url, true);
    var defaultFilename = "WebSite" + q.pathname + "/default.html";
    fs.exists(defaultFilename, function(existDefault){
        if (!existDefault)
        {
            var file = "WebSite" + q.pathname + ".html";
            fs.exists(file, function(existFile){
                if (!existFile)
                    badRequest("Path not found");
                else{
                   readFile(file, ok);
                }
                
            });
        }
        else
            readFile(defaultFilename, ok);
    });
    
    function ok(data){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    }

    function badRequest(message){
        res.writeHead(400, {'Content-type': 'text/html'});
        res.write(message);
        res.end();
    }

    function readFile (filename, callback){
        fs.readFile(filename, function(err, data){
            if (err) 
                throw err;
            callback(data);
        });
    }
}).listen(8080);