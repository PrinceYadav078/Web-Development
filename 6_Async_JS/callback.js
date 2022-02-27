const fs=require('fs')

// Callback function :- any function that is passed as an arguement 
// to another function is known as a callback function 




// function printFirstName(firstName,cb,cb2){
//     console.log(firstName)
//     cb('Yadav')
//     cb2(21)
// }

// function printLastName(lastName){
//     console.log(lastName)
// }


// function printAge(age){
//     console.log(age)
// }


// printFirstName('Prince',printLastName,printAge)


// Syncronous way of reading

console.log("before")

let data1=fs.readFileSync('f1.txt')
let data2=fs.readFileSync('ff2.txt')
console.log(' '+data1)
console.log(' '+data2)

console.log('after')



// Asyncronous way of reading 
// console.log('before')

// fs.readFile('f1.txt', cb)
// fs.readFile('ff2.txt',cb2)

// console.log("after")

// function cb(err, data){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(' '+data)
//     }
// }

// function cb2(err,data){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(' '+data)
//     }
// }

