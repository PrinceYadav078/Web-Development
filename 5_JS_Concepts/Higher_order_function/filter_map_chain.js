let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]

// take out the age of all ladies

let arr2=arr.filter(function identify(o){
    if(o.gender=='F'){
        return true
    }

    
}).map(function(n){
    return n.age
})
console.log(arr2)

let arr3=arr2.map(function age(o){
    return o.age
})
// console.log(arr3)
