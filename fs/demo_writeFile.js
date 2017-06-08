var fs = require('fs')
var rand = Math.floor(Math.random() * 1000);
var fileName = 'Resources/newWriteFile_' + rand + '.txt';


fs.writeFile(fileName, 'New File ' + rand, function(err){
    if (err) throw err;
    fs.readFile(fileName, function(err, data){
        console.log(data);
    });
});