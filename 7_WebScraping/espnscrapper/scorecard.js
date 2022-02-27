// const url="https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard"

const request = require('request')
const cheerio = require('cheerio')
const path = require("path")
const fs = require("fs")
const xlsx=require('xlsx')
function processscorecard(url) {
    request(url, cb)

}



function cb(err, response, html) {
    if (err) {
        console.error(err)
    }
    else {
        extractMatchDetails(html)
    }
}

function extractMatchDetails(html) {
    let $ = cheerio.load(html)
    let descString = $('.header-info .description')
    let descStringArr = descString.text().split(',')
    let MatchNumber = descStringArr[0].trim()
    let venue = descStringArr[1].trim()
    let date = descStringArr[2].trim()

    console.log(MatchNumber)
    console.log(venue)
    console.log(date)

    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span').text()
    console.log(result)

    console.log("````````````````````````````````````")

    let innings = $(".card.content-block.match-scorecard-table>.Collapsible")

    let htmlstring = ""

    for (let i = 0; i < innings.length; i++) {
        htmlstring += $(innings[i]).html()

        let teamnames = $(innings[i]).find("h5").text()

        teamnames = teamnames.split("INNINGS")[0].trim()

        let opponentindex = i == 0 ? 1 : 0
        let opponentname = $(innings[opponentindex]).find("h5").text()
        opponentname = opponentname.split("INNINGS")[0].trim()

        // console.log(teamnames, opponentname)
        // console.log("[ "+teamnames+" ]" +`
        //                             `)

        let cinning = $(innings[i])

        let allrows = cinning.find(".table.batsman tbody tr")

        for (let j = 0; j < allrows.length; j++) {
            let allcols = $(allrows[j]).find('td')
            let isworthy = $(allcols[0]).hasClass('batsman-cell')

            if (isworthy == true) {
                let playername = $(allcols[0]).text().trim()
                let runs = $(allcols[2]).text().trim()
                let balls = $(allcols[3]).text().trim()
                let fours = $(allcols[5]).text().trim()
                let sixes = $(allcols[6]).text().trim()
                let str = $(allcols[7]).text().trim()

                console.log(`${playername} | ${runs} | ${balls} | ${fours} | ${sixes} | ${str}`)

                processPlayer(playername, teamnames, opponentname, runs, balls, fours, sixes, str, MatchNumber, venue, date, result)

            }


        }
        console.log("````````````````````````````````````````````````````````")





    }
    //console.log(htmlstring)



}

function dirCreator(filepath) {
    if (fs.existsSync(filepath) == false) {
        fs.mkdirSync(filepath)
    }
}

function processPlayer(playername, teamnames, opponentname, runs, balls, fours, sixes, str, MatchNumber, venue, date, result) {
    let teampath = path.join(__dirname, "IPL", teamnames)
    dirCreator(teampath)
    let filepath = path.join(teampath, playername + '.xlsx')
    let content=excelReader(filepath,playername)

    let playerObj = {
        playername, 
        teamnames, 
        opponentname, 
        runs, 
        balls,
        fours,
        sixes, 
        str, 
        MatchNumber, 
        venue, 
        date, 
        result
    }
    
    content.push(playerObj)

    excelWriter(filepath,playername,content)

}

function excelWriter(fileName, sheetName, jasonData) {
    let newWB = xlsx.utils.book_new();
    // CREATING A NEW WORKBOOK
    let newWS = xlsx.utils.json_to_sheet(jasonData);
    //JSON IS CONVERING TO SHEET FORMAT (ROWS & COL)
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, fileName);
}

function excelReader(fileName, sheetName) {
    if (fs.existsSync(fileName) == false) {
        return []
    }
    let wb = xlsx.readFile(fileName);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans

}


module.exports = {
    ps: processscorecard
};