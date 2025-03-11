const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('home page it is ! 🏠');
    }

    else if(req.url === '/about'){
        res.end('about page it is ! 📖');
    }
    else{
        res.end(`
            <h1>Ooops!</h1>
            <p>page does not exist</p>
            <a href = "/"> click here to go back to home page</a>
            `)
    }
})

server.listen(4000);
server.close();