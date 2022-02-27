const request =require('request')
const cheerio=require("cheerio")


console.log("brfore")

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary" , cb)

function cb(error , response, html){
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}

console.log("after")

function handleHtml(html){
    let selTool=cheerio.load(html)
    let contentArr=selTool(".match-comment-wrapper .match-comment-long-text p")
    let lbc=selTool(contentArr[0]).text()
    console.log(lbc)
}