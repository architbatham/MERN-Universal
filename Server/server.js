import http from 'http';

http.createServer((req,res)=>{
    res.writeHead(200,{"content type":"text/html"});
    res.write("<h1>Test server</h1>");
    res.writeHead(200,{"content type":"text/css"});
    res.end();
}).listen(8081);
console.log("Server start at link http://localhost:8081");
