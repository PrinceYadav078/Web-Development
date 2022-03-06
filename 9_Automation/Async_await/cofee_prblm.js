function placeorder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve("Order for Coffee")
        }else{
            reject("Order can not be placed")
        }
    })
}

function processorder(order){
    return new Promise(function(resolve){
        console.log("Order is Being processed")
        resolve(`${order} Served`)
    })
}

// placeorder("coffee").then(function(demand){
//     console.log(demand)
//     let orderIsproceessed=processorder(demand)
//     return orderIsproceessed
// }).then(function(orderserved){
//     console.log(orderserved)
// }).catch(function(err){
//     console.log(err)
// })

async function serveorder(){
    try{
        let orderplaced=await placeorder("coffee")
        console.log(orderplaced)
        let processedorder=await processorder(orderplaced)
        console.log(processedorder)
    } catch(err){
        console.log(err)

    }

}

serveorder()