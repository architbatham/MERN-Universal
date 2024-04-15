
//UI page loading

import http from 'http';
import url from 'url';
import fs from 'fs';

http.createServer((req,res)=>{
 var urlobj=url.parse(req.url,true);
 var file_content;
 if(urlobj.pathname=="/" || urlobj.pathname=="/home")
  file_content=fs.readFileSync("./views/home.html");
 else if(urlobj.pathname=="/about")
  file_content=fs.readFileSync("./views/about.html");
 else if(urlobj.pathname=="/contact")
  file_content=fs.readFileSync("./views/contact.html");  
 else if(urlobj.pathname=="/service")
  file_content=fs.readFileSync("./views/service.html");
 else if(urlobj.pathname=="/register")
  file_content=fs.readFileSync("./views/register.html");
 else if(urlobj.pathname=="/login")
  ///./ file_content=fs.readFileSync("./views/login.html");
 else
  file_content=fs.readFileSync("./views/pnf.html");

 res.write(file_content);
 res.end();  
}).listen(8081);

console.log("server invoked at link http://localhost:8081");