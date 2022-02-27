const request=require('request')
const cheerio=require('cheerio')
const scorecard=require('./scorecard')


function getallmatchlink(url2){
    request(url2 , function(err, response, html){
        if(err){
            console.log(err)
        }else{
            extractAllLink(html)
        }
    })
}

function extractAllLink(html){
    let $=cheerio.load(html)
    let scorecardarr=$('.match-cta-container a[data-hover="Scorecard"]')
    // let count=0
    for(let i=0;i<scorecardarr.length;i++){
        let link=$(scorecardarr[i]).attr('href')
        let fulllink="https://www.espncricinfo.com/"+link
        // count++
        // console.log(fulllink)
        scorecard.ps(fulllink)
    }
    // console.log("link count-> "+count)
    

}

module.exports={
    getallmatch:getallmatchlink
}
