const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request=require("request")
const cheerio=require("cheerio")
const allmatchobj=require('./allmatch')
const fs=require("fs")
const path=require("path")

let IPLpath=path.join(__dirname,"IPL")
let battingpath=path.join(IPLpath,"BattingData")
let bowlingpath=path.join(IPLpath,"BowlingData")
function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){
        fs.mkdirSync(filepath)
    }
}
dirCreator(IPLpath)
dirCreator(battingpath)
dirCreator(bowlingpath)

request(url,cb)

function cb(err,response,html){
    if(err){
        console.log(err)
    }else{
        extractlink(html)
    }
}

function extractlink(html){
    let $=cheerio.load(html)
    let anchorelem=$('.widget-items.cta-link a[data-hover="View All Results"]')
    let link= anchorelem.attr('href')
    // console.log(link)
    let fulllink="https://www.espncricinfo.com/"+link
    // console.log(fulllink)
    allmatchobj.getallmatch(fulllink)

}

