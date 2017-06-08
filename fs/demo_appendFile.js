var fs = require('fs');
var http = require('http');
var randomNumber = (Math.floor(Math.random() * 1000));
var newFile = 'Resources/newFileHTML_' + randomNumber + '.html';

fs.appendFile(
    newFile, 
    '<html>' + 
    '   <body>' +
    '       <strong>New HTML ' + randomNumber + '</strong>' +
    '   </body>' +
    '</html>', 
    function(err){
        if (err) throw err;
        console.log('Saved');
    }
);

http.createServer(function(request, response){
    fs.readFile(newFile, function(err, data){
        response.writeHead(200, {'Content-type':'text/html'});
        response.write(data);
        response.end();
    });
}).listen(8080);