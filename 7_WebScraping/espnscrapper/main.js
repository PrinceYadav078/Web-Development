const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request=require('request')
const cheerio=require('cheerio')
const fs=require("fs")
const path= require("path")

const allmatchObj=require('./allmatch')


let iplpath=path.join(__dirname,"IPL")

function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){
        fs.mkdirSync(filepath)
    }
}

dirCreator(iplpath)

request(url, cb)

function cb(err, response, html){
    if(err){
        console.error(err)
    }
    else{
        extractLink(html)
    }
}

function extractLink(html){
    let $=cheerio.load(html)
    let anchorElem=$('a[data-hover="View All Results"]')

    let link = anchorElem.attr("href")
    let fulllink="https://www.espncricinfo.com/"+link

    allmatchObj.getAllMatch(fulllink)

}

