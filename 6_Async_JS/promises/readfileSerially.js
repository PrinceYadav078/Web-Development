let fs = require("fs")

console.log("before")
for(let i=0; i<10; i++){
    fs.readFile('f1.txt', cb1)

}




// function cb1(err, data){
//         if(err){
//             console.log(err)
//         }else {
//             console.log('I am data f1-> '+data)
//             fs.readFile('f2.txt',cb2)
//         }
//     }

// function cb2(err, data){
//     if(err){
//         console.log(err)
//     }else {
//         console.log('I am data f2-> '+data)
//         fs.readFile('f3.txt',cb3)
//     }
// }


// function cb3(err, data){
//     if(err){
//         console.log(err)
//     }else {
//         console.log('I am data f3-> '+data)

//     }
// }



// console.log("after")



// let f1p= fs.promises.readFile('f1.txt')

// let f2p= fs.promises.readFile('f2.txt')

// let f3p= fs.promises.readFile('f3.txt')


// function cb(data){
//     console.log('File Data-> '+data)

//     f2p.then(function(data){
//         console.log('file data-> '+data)
//         f3p.then(function(data){
//             console.log('file data-> '+data)
//         })

//     })


// }

// f1p.then(cb)

