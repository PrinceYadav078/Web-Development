let puppeteer= require('puppeteer')

console.log("before")

let browserwillbelaunchedpromise= puppeteer.launch({
    headless:false,
    deafaultViewport:null,
    rgs:['--start-maximized']
})

browserwillbelaunchedpromise.then(function(browserinstance){
    let newtab=browserinstance.newPage()
    return newtab
}).then(function(newtab){
    console.log("New Tab Opened")
    let pepcoding=newtab.goto('https://www.pepcoding.com/')
    return pepcoding
}).then(function(pepcoding){
    console.log("website opened")

})

console.log("after")