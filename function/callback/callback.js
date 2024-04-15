
console.log("before function execitution");

function arc(a,b,add)
{
    var c=a+b;

    console.log("call back");
    add(c)
}
var a,b;
a=10;
b=20;
arc(a,b,(res)=>{
    console.log("Demo" +res);
})

console.log("before function execitution");