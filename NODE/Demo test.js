console.log("Before");

function demo(a,b)
{
    var c=a+b;
    return c;
}

var a,b;
a=10;
b=20;

var res =demo(a,b);
console.log("add"+res); 

setTimeout(demo,2000);

console.log("After");