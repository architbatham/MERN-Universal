 
import http from 'http';

var urlRoute="<h2> Click on the link bellow to redirect</h2><br><a href = '/home' >Home page </a><br><a href = '/help' >help page </a><br> <a href = '/about' >about page </a><br><a href = '/contact' >contact page </a><br><a href = 'login' >login page </a>"

http.createServer((req,res)=>{
    var msg = "";

    if(req.url=="/" || req.url=="/home")
    msg="<h1>/or /home url invoked</h1>";
    else if( req.url=="/about")
    msg="<h1>about url invoked</h1>";
    else if( req.url=="/help")
    msg="<h1>/help url invoked</h1>";
    else if( req.url=="/contact")
    msg="<h1>Contact url invoked</h1>";
    else if( req.url=="/login")
    msg="<h1>login url invoked</h1>"; 
    else
    msg="<h1>no url invoke</h1>";
    res.write(msg+urlRoute); 
    res.end();
}).listen(8081);
console.log("Server start at link http://localhost:8081");
