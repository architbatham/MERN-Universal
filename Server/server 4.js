 //ui page loading
import http from 'http';
import fs from "fs";


http.createServer((req,res)=>{
    var data=fs.readFileSync("./views/indec.html");
    res.write(data);
    res.end();
}).listen(8081);

console.log("Server start at link http://localhost:8081");
