let puppeteer = require('puppeteer')
const codefile=require("./code")
let loginlink = "https://www.hackerrank.com/auth/login"
let email = "ticapil117@petloca.com"
let password = "prince@078"



console.log("before");



(async function(){
    try{
        let browserwillbelaunched = await puppeteer.launch({
                headless: false,
                deafaultViewport: null,
                args: ["--start-maximized"],
            });
            let newtab =await browserwillbelaunched.newPage();

            await newtab.goto(loginlink);

            await newtab.type("input[id=input-1]",email,{delay:100});

            await newtab.type("input[id=input-2]",password,{delay:100});

            await newtab.click("button[data-analytics='LoginPassword']", {delay:50});

            await waitAndClick('.topic-card a[data-attr1="algorithms"]',newtab);

            await waitAndClick('input[value="warmup"]',newtab);

            var challengesarr=await newtab.$$('.challenge-submit-btn');
            console.log("no. of question" + challengesarr.length);
            
            
            await QuestionSolver(newtab,challengesarr[1],codefile.answers[0]);
            

    }catch(err){
        console.log(err)
    }
      
})();


async function QuestionSolver(page,question,answer){

    try{
            await question.click();
            let waitforeditor=await waitAndClick('.hr-monaco-base-editor.showUnused',page);
            await waitAndClick('.checkbox-input', page);
            await  page.waitForSelector(".text-area.custominput");
            await  page.type(".text-area.custominput",answer,{delay:5});
            await page.keyboard.down("Control");
            await page.keyboard.press("A",{delay:50});
            await page.keyboard.press("X",{delay:50});
            await page.keyboard.up("Control");
            await waitAndClick('.hr-monaco-base-editor.showUnused',page);
            await page.keyboard.down("Control");
            await page.keyboard.press("A",{delay:50});
            await page.keyboard.press("V",{delay:50});
            await page.keyboard.up("Control");
            await page.click(".hr-monaco__run-code",{delay:20});
            await page.click(".hr-monaco-submit.ui-btn-styled",{delay:20});

    }catch(err){
        console.log(err)

    }
    

}


async function waitAndClick(selector,cpage){
        try{
            let waitformodalpromise=await cpage.waitForSelector(selector)
        
            let clickmodal=await cpage.click(selector,{delay:100})

        }catch(err){
            console.log(err)

        }
        
}






