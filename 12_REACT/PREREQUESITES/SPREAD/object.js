let obj={
    name:'Prince',
    address:{
        country:'india',
        State:{
            statename:'uttar pradesh',
            pincode:283203
        }
    }
}

// let obj2={...obj, address:{...obj.address, State:{...obj.address.State}}} //shallow copy

let obj2=JSON.parse(JSON.stringify(obj))  // deep copy

obj.name='dilip'
obj.address.country='USA'
obj.address.State.pincode=123456


console.log(obj)
console.log(obj2)