// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.



// let arr=[2,3,4,5,6,7]
//MAP FUNCTION

//map is itslef a function
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that inside the callback function
//map returns a new array

// let sqarr=arr.map(function squarrer(v){
//     return v*v
// })
// console.log(sqarr)

// //PRINT NAMES FROM AN ARRAY USING MAP FUNTION

// let namearr=['prince','harsh','shweta']

// let name=namearr.map(function Name(v){ 
//     return v 
// }) 

// console.log(name)

// let nameArr=['Prince YAdav','Praveen Yadav','Dilip Yadav']

// // You have to use map function and you will take out firstName and lastName separately

// let nameArr2=nameArr.map(function split(n){
//     return n.split(" ")
// })
// console.log(nameArr2)

// you have to convert dollar to rupees

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 74;

// const rupees=transactions.map(function doltoRS(d){
//     return d*inrtToUsd
// })

// console.log(rupees)

//convert rupees to dollar

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

const dollar=transactions.map(function doltoRS(d){
    return (d/inrtToUsd).toFixed(2)
})

console.log(dollar)