//create http server to reolve following url
import  http from 'http';
http.createServer ((req,res)=>{

    var urlRoute = "<h2>click the bellow link </h2><a href ='/home'>Home page</a><br><br><a href ='/about'>About page</a><br><br><a href ='/contact'>Contact page</a><br><br><a href ='/service'>Service page</a><br><br><a href ='/login'>login page</a><br><br><a href ='/register'>register</a>"
    var msg ="";
    if (req.url=="/home")
    msg="<h1>Home page invoke</h1>";

    else if (req.url=="/about")
    msg="<h1>About page invoke</h1>";

    else if (req.url=="/contact")
    msg="<h1>IThis is contact page</h1>";

    else if (req.url=="/service")
    msg="<h1>Service page </h1>";

    else if (req.url=="/register")
    msg="<h1>You can registr yourself hear</h1>";

    else if (req.url=="/login")
    msg="<h1>login yourself</h1>";

    else 
    msg="<h1>page not found </h1>";

    
    res.write(msg+urlRoute);
    res.end();
}).listen(8081);

how to push 