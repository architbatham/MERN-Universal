//url routing + http method checking 

import http from 'http';
import url from 'url';
import fs form 'fs';


http.createServer((req,res)=>{
 var urlobj=url.parse(req.url,true);
 var file_content;
 if(urlobj.pathname=="/" || urlobj.pathname=="/home")
  file_content=fs.readFilesync("./view/home.html");
 else if(urlobj.pathname=="/about")
 file_content=fs.readFilesync("./view/about.html");
 else if(urlobj.pathname=="/contact")
 file_content=fs.readFilesync("./view/contact.html");  
 else if(urlobj.pathname=="/service")
 file_content=fs.readFilesync("./view/service.html");
 else if(urlobj.pathname=="/register")
 file_content=fs.readFilesync("./view/register.html");
 else if(urlobj.pathname=="/login")
 file_content=fs.readFilesync("./view/login.html");
 else
 file_content=fs.readFilesync("./view/pnf.html");

 res.write(file_content);
 res.end();  
}).listen(8081);

console.log("server invoked at link http://localhost:8081");