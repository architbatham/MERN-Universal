import  http from 'http';
http.createServer ((req,res)=>{
    res.write("<h1>hello world</h1>");
    res.end();
}).listen(8081);
