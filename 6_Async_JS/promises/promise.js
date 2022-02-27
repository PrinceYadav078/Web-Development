const fs= require("fs")

console.log("before")

// fs.readFile("f2.txt",function(err,data){
//     if(err){
//         console.log("err")
//     }else{
//         console.log("I am f1 data-> "+ data)
//     }
// })

let promise=fs.promises.readFile("f1.txt")
// console.log(promise)

// FullFilled
promise.then(function(data){
    console.log("File data-> "+ data)
})

//rejected
promise.catch(function(err){
    console.log("err")
})

// console.log(promise)


console.log("after")