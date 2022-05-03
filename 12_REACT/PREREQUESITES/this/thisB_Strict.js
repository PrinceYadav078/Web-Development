'use strict'

// console.log(this) //globally this ko call kiya hai to  (WINDOW OBJECT) aata hai

// function test(){
//     console.log(this)
// }
// test()  // function ke andar this ko call kiya hai to  (UNDEFINED) AATA HAI


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

obj2.showThis() //object ke andar function ke andar function me this ko call kiya jae to (UNDEFINED) AATA HAI



