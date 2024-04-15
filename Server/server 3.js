 //ui page loading
import http from 'http';
import fs from "fs";


http.createServer((req,res)=>{
    fs.readFile("./views/indec.html",(err,data)=>{
        if (err)
        console.log(err);
        else
        //console.log("file content: "+data);
        res.write(data) ;
        res.end();

    });//method of fs
    
    
}).listen(8081);
console.log("Server start at link http://localhost:8081");
