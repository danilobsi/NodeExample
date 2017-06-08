var fs = require('fs');

fs.open('Resources/newFileOpen.txt', 'w', function(err, fd){
    if (err) throw err;
    console.log('Saved!');
});