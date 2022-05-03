class person{
    constructor(name, age, love){
        this.Name=name
        this.age=age
        this.Love=love

    }
    welcome(){
        console.log("Hello "+ this.Name)
    }
}

class Teacher extends person{
    constructor(name, age, subject){
        super(name,age)
        this.Subject=subject
        
    }
  
}

class Student extends person{
    constructor(name,age,cgpa){
        super(name,age)
        this.CGPA=cgpa
    }
    hello(){
        super.welcome()
    }
}

let person1= new person("Prince", 21, "Shweta")

let teacher=new Teacher("Steve","Magic",40)
let student= new Student("Shweta",21, 8.0)

// console.log(person1)

// console.log(teacher)

// console.log(student)

person1.welcome()
student.hello()