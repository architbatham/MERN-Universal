class student{
    constructor(archit, age){
        this.name = archit ;
        this.age= age;
    }
    hello(){
        console.log("Hello" + this.name +"your age is "+this.age);
    }
}
let a = new student(" archit",100);

a.hello();