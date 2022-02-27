// syntax of promise-:

// let myPromise= new Promise(function(resolve,reject){
//     // your code will go here
     
// })


let promise=new Promise(function(resolve,reject){
    const a=2
    const b=5

    if(a===b){
        resolve("Yes the Values are Equal")

    }else{
        reject("No the Values are not equal")
    }
})

promise.then(function(data){
    console.log("Result coming from Resolve Method-> "+data)
})

promise.catch(function(err){
    console.log("Result coming from Reject Method-> "+ err)

})