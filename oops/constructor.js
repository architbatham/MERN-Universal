class student{
    constructor(archit ){
        this.name = archit ;
        console.log("hello world");
    }
    hello(){
        console.log(this.name)
    }
}
let a = new student("hello bahi i am archit");

a.hello();