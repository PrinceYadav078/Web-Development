//SETTIMEOUT FUNCTION

setTimeout(function(firstName){
    console.log(firstName)
},3000, "Prince");


function greeting(name,role){
    console.log("Hello my name is "+ name)
    console.log("I am a "+role)
}
setTimeout(greeting , 3000, "Prince", "Software Developer");


//SETINTERVAL FUNCTION 

// let count=0;

// let interval=setInterval(function(){
//     count+=1;
//     console.log(count);

//     if(count===6){
//         clearInterval(interval);
//     }
// },3000);