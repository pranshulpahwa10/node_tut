var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //here data is sent as a whole like complete 64kb or so what exactly is the content of bigtext.txt
    // const text = fs.readFileSync('./content/bigtext.txt', 'utf-8');
    //res.end(text);

    //now we'll send data in chunks

    // Create a readable stream from the file
    const fileStream = fs.createReadStream('./content/bigtext.txt', 'utf-8');
    
    // Listen for the 'open' event
    fileStream.on('open', ()=>{
        // Pipe the data from the readable stream to the writable stream (HTTP response)
        fileStream.pipe(res);
    });

})
.listen(4000);