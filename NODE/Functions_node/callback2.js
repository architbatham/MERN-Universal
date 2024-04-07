console.log("before");

function demo(cb){
    console.log("demo");
    setTimeout(cb,2000);
}
demo(()=>{
    console.log("demo invoke callback");
});

console.log("after");