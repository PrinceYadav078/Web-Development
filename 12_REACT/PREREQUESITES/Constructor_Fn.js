//CONSTRUCTOR FUNCTION => WHEN FUNTION WORK AS A TEMPLATE

function car(Name , Model, Color){
    this.name=Name
    this.model=Model
    this.color=Color

    this.test= function(){
        console.log(`I am driving ${this.model}`)
    }
}


let car1=new car("BMW","X6","BLACK" )

let car2=new car("Mercedes", "S class", "Yellow")

car2.test()

console.log(car1)

console.log(car2)