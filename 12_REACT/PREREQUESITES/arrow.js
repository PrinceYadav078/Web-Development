// write a function to add two numbers and print their sum (Function Expression)

// let add=(a,b)=>{
//     console.log(a+b)
// }

// add(3,8)

// // NORMAL FUNCTION
// let regularfunction=function(){
//     console.log("I am a Regular Function")
// }


// // ARROW FUNCTION
// let arrowFunction=()=>{
//     console.log("I am an Arrow Function")
// }

// regularfunction()
// arrowFunction()

let test= ()=>{
    console.log(this)  // {} EMPTY OBJECT AAEGA
}
test()

// let person= {
//     name:'I Love You Shweta',
//     age:21,

//     showdetails:function(){
//         console.log(this.name +' '+ this.age)
//     },

//     showDetailsArrow : () => {
//         console.log(this.name +' '+ this.age)
//     }
// }

// person.showdetails()
// person.showDetailsArrow()