var http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-type':'text/json'});
    var json = {
        newObj: 1,
        newStr: "test"
    };
    //resp.end(json);
    resp.end(JSON.stringify(json));
}).listen(8080);