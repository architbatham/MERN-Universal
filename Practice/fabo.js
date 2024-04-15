console.log("before");
function demo(){
    var c;
    console.log(c);
}
setTimeout(demo,2000);
var a=-1,b=1,limit=1000;
while(true)
{
 let c=a+b;
 if(c>limit)
  break;   
 
 a=b;
 b=c; 
}
console.log("after");
