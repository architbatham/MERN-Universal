import http from 'http';

var server=http.createServer((request,response)=>{
 response.write("<h1>Welcome to Node server</h1>");
 response.end();  
});

server.listen(8081,(error)=>{
 if(error)
  console.log(error);
 else
  console.log("server invoked at link http://localhost:8081");
});