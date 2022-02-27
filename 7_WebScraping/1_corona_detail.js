const request= require("request")
const cheerio=require("cheerio")


console.log("brfore")

request("https://www.worldometers.info/coronavirus/" , cb)

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
    let contentArr=selTool(".maincounter-number span")

    // for(let i=0; i<contentArr.length;i++){
    //     let data =selTool(contentArr[i]).text()
    //     console.log(data)
    // }

    let totalCases=selTool(contentArr[0]).text()
    console.log("Total Cases:" , totalCases)

    let totalDeaths=selTool(contentArr[1]).text()
    console.log("Total Deaths:", totalDeaths)

    let totalRecoveries =selTool(contentArr[2]).text()
    console.log('total recoveries:',totalRecoveries)


}