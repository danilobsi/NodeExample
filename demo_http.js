var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var q = url.parse(req.url, true).query;

    if (q.info)
        res.write('info: ' + q.info);
    res.end();
}).listen(8080);