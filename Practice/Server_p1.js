import http from 'http';

http.createServer((req,res)=>{
    res.write("<h1>welcome</h1>");
    res.end();
}).listen(8082);
console.log("server invoked at link http://localhost:8082");2