// this keyword is for reference purpose to ANY OBJECT OR ELEMENT

//this keyword's value will depend upon how it is called 

// console.log(this) //globally this ko call kiya hai to  (empty object) aata hai

// function test(){
//     console.log(this)
// }
// test()  // function ke andar this ko call kiya hai to  (GLOBAL OBJECT) AATA HAI


// let obj={
//     name :'adam',
//     age:28,
//     showThis: function(){
//         console.log(this)
//     }
// }

// obj.showThis() // object ke andar function ke andar this ko call kiya jae to (OBJECT ITSELF)  AATA HAI

let obj2={
    name :'adam',
    age:28,
    showThis: function(){
        function test(){
            console.log(this)
        }
        test()
    }
}

obj2.showThis() //object ke andar function ke andar function me this ko call kiya jae to (GLOBAL OBJECT) AATA HAI



