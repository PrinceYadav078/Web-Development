//ARRAY

// let arr=['hi','I','am','mrinal']

// //Destructuring

// let [a,b,c,d, e='bye']=arr

// console.log(a,b,c,d,e)


//OBJECT

// let obj={
//     name:'prince',
//     state:'uttarpradesh',
//     pincode:'283203'
// }

// let {name,state,pincode}=obj

// console.log(name,state, pincode)

//NESTED OBJECT

let obj2={
    name:'Prince',
    address:{
        country:'india',
        State:{
            statename:'uttar pradesh',
            pincode:283203
        }
    }
}

// let {name}=obj2
// let{address:{country}}=obj2
// let{address:{State:{pincode,statename}}}=obj2

let {name,address:{country,State:{statename,pincode}}}=obj2

console.log(name)
console.log(country)
console.log(pincode,statename)