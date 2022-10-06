/* <h4>what is objects</h4> */
// there are three different ways of creating object :
// 1. object Literal

let obj = {
    name:'hardik',
    age: 23,
}
console.log(obj.name);

// 2.creating instance of object
let obj1 = new Object();

    obj1.name='hardik',
    obj1.age= 23;

// 3.object constructor
function Obj(name,age){
    this.name = name;
    this.age = age;
}
let obj2= new Obj('ram','22')
console.log(obj2)

/* <h4>What are function constructors?</h4> */
function Obj(name,age){
    this.name = name;
    this.age = age;
}
let obj3= new Obj('ram','22')
console.log(obj3)

// <h4>Explain prototypes and prototypes chain</h4>
function Student (name, age, rollno){

    this.name = name;
    
    this.age= age;
    
    this.rollno = rollno;
    
    }
    Student.prototype.nationality='american';
    let student1 = new Student ('sham', 25, 12) 
    
    let student2 = new Student('prem', '23', 15)
    
    console.log(student1);

    // <h4>What are callbacks?</h4>

function callback(callback) {
         console.log('Hi, I am Callback Function'); 
         callback()
}
function show() {
console.log("This will get printed after callback") }

callback(show);

function Student (name, age, rollno){

    this.name = name;
    
    this.age= age;
    
    this.rollno = rollno;
    
    }
    Student.prototype.nationality='american';
    let student6 = new Student ('sham', 25, 12) 
    
    let student7 = new Student('prem', '23', 15)
    
    console.log(student6);

// <h4>give an example of inheritance using function constructor</h4>
function Student (name, age,){

    this.name = name;
    
    this.age= age;
    }
    function StudentDescription(name,age,id,cls){
        Student.call(this,name,age,id,cls)
        this.id=id;
        this.clas=cls
    }
    let student4 = new Student ('sham', 25) 
    
    let student5 = new StudentDescription('prem', 23,101,'b.tech')
    
    console.log(student4);
    console.log(student5);
