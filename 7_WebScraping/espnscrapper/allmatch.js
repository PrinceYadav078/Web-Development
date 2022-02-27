const cheerio=require("cheerio")
const request=require("request")

const ScoreCard=require("./scorecard")

function getAllMatchLink(uri){
    request(uri , function(err, response, html){
        if(err){
            console.log(err)
        }else{
            extractAllLink(html)
        }
    })
}

function extractAllLink(html){
    let $=cheerio.load(html)
    let scoreCardArr=$('a[data-hover="Scorecard"]')
    for(let i=0;i<scoreCardArr.length;i++){
        let link=$(scoreCardArr[i]).attr('href')
        let fulllink='https://www.espncricinfo.com/'+link
        // console.log(fulllink)
        ScoreCard.ps(fulllink)
        
    }

}

module.exports={
    getAllMatch:getAllMatchLink,
};