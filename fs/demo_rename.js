var fs = require("fs");

fs.rename('Resources/demofile1.html', 'Resources/demofile2.html', function(err){
    if (err)
        throw err;
    console.log('file renamed');
    fs.rename('Resources/demofile2.html', 'Resources/demofile1.html', function(errInt){
        if (errInt)
            throw errInt;
        console.log('File renamed to original');
    });
});