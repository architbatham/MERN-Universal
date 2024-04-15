//WAP to check entered n digit number is palindrome or not using call back funcrtion

console.log("before");
function demo(cb){
    console.log("demo");
    setTimeout(cb,2000);
    
}
demo(()=>{
    console.log("demo call back")
});

console.log("after");

