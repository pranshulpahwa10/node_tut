const http = require('http');
//using event emitter
const server = http.createServer()

server.on('request',(req, res)=>{
    res.end(`executed`);
})
server.listen(4000);
setTimeout(()=>{
    server.close();
},10000)