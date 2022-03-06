let puppeteer = require('puppeteer')
const codefile=require("./code")
let loginlink = "https://www.hackerrank.com/auth/login"
let email = "ticapil117@petloca.com"
let password = "prince@078"

let page

console.log("before")

let browserwillbelaunchedpromise = puppeteer.launch({
    headless: false,
    deafaultViewport: null,
    args: ["--start-maximized"],
})

browserwillbelaunchedpromise.then(function (browserinstance) {
    let newtabpromise = browserinstance.newPage()
    return newtabpromise
}).then(function (newtab) {
    console.log("New Tab Opened")
    page = newtab
    let pagewillbeopenedpromise = newtab.goto(loginlink)

    return pagewillbeopenedpromise
}).then(function () {
    console.log("website opened")
    let typeemailpromise=page.type("input[id=input-1]",email,{delay:100})
    return typeemailpromise
    


}).then(function(){
    let typepasswordpromise=page.type("input[id=input-2]",password,{delay:100})
    return typepasswordpromise

}).then(function(){
    let clicklogin=page.click("button[data-analytics='LoginPassword']", {delay:50})
    return clicklogin
}).then(function(){
    let algowillbeclickedpromise=waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
    return algowillbeclickedpromise
}).then(function(){
    console.log("algo sectoin clicked")
}).then(function(){
    let gettowarmuppromise=waitAndClick('input[value="warmup"]',page)
    return gettowarmuppromise
 }).then(function(){
     let challengesarr=page.$$('.challenge-submit-btn')
     return challengesarr
 }).then(function(questionsarr){
     console.log('no. of ques-> '+questionsarr.length)
     let questionwillbesolvedpromise=questionsolver(page,questionsarr[1],codefile.answers[0])
    

 })

function waitAndClick(selector,cpage){
    return new Promise(function(resolve,reject){
        let waitformodalpromise=cpage.waitForSelector(selector)
        waitformodalpromise.then(function(){
            let clickmodalpromise=cpage.click(selector,{delay:100})
            return clickmodalpromise
        }).then(function(){
            resolve()
        }).catch(function(){
            reject()
        })
    })
}

function questionsolver(page,question,answer){
    return new Promise(function(resolve,reject){
        let questionwillbeclicked=question.click()
        questionwillbeclicked.then(function(){
            let waitforeditor=waitAndClick('.hr-monaco-base-editor.showUnused',page)
            return waitforeditor

        }).then(function(){
            return waitAndClick('.checkbox-input', page)
        }).then(function(){
            return page.waitForSelector(".text-area.custominput")
        }).then(function(){
            return page.type(".text-area.custominput",answer,{delay:5})
        }).then(function(){
            let ctrlisholdpromise=page.keyboard.down("Control")
            return ctrlisholdpromise
        }).then(function(){
            let Aispressedpromise=page.keyboard.press("A",{delay:50})
            return Aispressedpromise
        }).then(function(){
            let Xispressedpromise=page.keyboard.press("X",{delay:50})
            return Xispressedpromise
        }).then(function(){
            let ctrlisreleasepromise=page.keyboard.up("Control")
            return ctrlisreleasepromise
        }).then(function(){
            let waitforeditor=waitAndClick('.hr-monaco-base-editor.showUnused',page)
            return waitforeditor
        }).then(function(){
            let ctrlisholdpromise=page.keyboard.down("Control")
            return ctrlisholdpromise
        }).then(function(){
            let Aispressedpromise=page.keyboard.press("A",{delay:50})
            return Aispressedpromise
        }).then(function(){
            let Vispressedpromise=page.keyboard.press("V",{delay:50})
            return Vispressedpromise
        }).then(function(){
            let ctrlisreleasepromise=page.keyboard.up("Control")
            return ctrlisreleasepromise
        }).then(function(){
            let runbuttonclicked=page.click(".hr-monaco__run-code",{delay:20})
        }).then(function(){
            resolve()
        }).catch(function(err){
            console.log(err)                
        }).then(function(){
            let submitbuttonclicked=page.click(".hr-monaco-submit",{delay:20})

        })
             
        
    })
}


// .then(function(){
//     let clickuser=waitAndClick('[data-analytics="NavBarProfileDropDown"]',page)
//     return clickuser
// }).then(function(){
//     let clicklogout=waitAndClick('button[data-analytics="NavBarProfileDropDownLogout"]',page)
//     return clicklogout
// })

