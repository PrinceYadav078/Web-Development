// const url="https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard"

const request=require("request")
const cheerio=require("cheerio")
const path = require("path")
const fs = require("fs")
const xlsx=require('xlsx')

function processscorecard(uri){
    request(uri,cb)

}



function cb(err,response,html){
    if(err){
        console.log(err)
    }else{
        extractmatchdetails(html)
    }
}

function extractmatchdetails(html){
    let $=cheerio.load(html)
    let descstring=$('.header-info .description').text()
    let result=$('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span').text().trim()
    let descstringarr=descstring.split(',')
    let matchnumber=descstringarr[0].trim()
    let venue=descstringarr[1].trim()
    let date=descstringarr[2].trim()
    console.log(matchnumber)
    console.log(date)
    console.log(venue)
    console.log(result)

    console.log("``````````````````````````````````````````````````````````````````````````````````")

    let innings=$('.card.content-block.match-scorecard-table .Collapsible')

    let htmlstring=''
    

    for(let i=0;i<innings.length;i++){
        htmlstring+=$(innings[i]).html()
        let teamnames=$(innings[i]).find('.header-title.label').text()
        teamnames = teamnames.split("INNINGS")[0].trim()
        let opponentindex= i==0? 1:0
        let opponentnames=$(innings[opponentindex]).find('.header-title.label').text()
        opponentnames = opponentnames.split("INNINGS")[0].trim()
        console.log(teamnames, opponentnames)

        let cinning=$(innings[i])

        let allbatrows=cinning.find('.table.batsman tbody tr ')
        

        for(let j=0;j<allbatrows.length;j++){
            let allcolms=$(allbatrows[j]).find('td')
            let isworthy=$(allcolms[0]).hasClass('batsman-cell')

            if(isworthy==true){
                let playername1=$(allcolms[0]).text().trim()
                let runs1=$(allcolms[2]).text().trim()
                let balls=$(allcolms[3]).text().trim()
                let fours=$(allcolms[5]).text().trim()
                let sixes=$(allcolms[6]).text().trim()
                let str=$(allcolms[7]).text().trim()

                // console.log(playername1)

              

                console.log(`${playername1} | ${runs1} | ${balls} | ${fours} | ${sixes} | ${str} `)
                BattingprocessPlayer(playername1, teamnames, opponentnames, runs1, balls, fours, sixes, str, matchnumber, venue, date, result)
            }

        }
        console.log(`*******************************************************`)

        let allbowlrows=cinning.find('.table.bowler tbody tr')
        for(let k=0;k<allbowlrows.length;k++){
            let allcolms=$(allbowlrows[k]).find('td')
            let isworthy=$(allcolms[0]).hasClass('text-nowrap')
            if(isworthy==true){
                let playername2=$(allcolms[0]).text().trim()
                let over=$(allcolms[1]).text().trim()
                let maiden=$(allcolms[2]).text().trim()
                let runs2=$(allcolms[3]).text().trim()
                let wicket=$(allcolms[4]).text().trim()
                let economy=$(allcolms[5]).text().trim()

                // console.log(playername2)
                console.log(`${playername2} | ${over} | ${maiden} | ${runs2} | ${wicket} | ${economy}`)
                BowlingprocessPlayer(playername2, teamnames, opponentnames,over,runs2,maiden,wicket,economy, matchnumber, venue, date, result)
            }
        }

        console.log("***********************************************************")
        
    }
    

    // console.log(htmlstring)
}

function dirCreator(filepath) {
    if (fs.existsSync(filepath) == false) {
        fs.mkdirSync(filepath)
    }
}

function BattingprocessPlayer(playername1, teamnames, opponentnames, runs1, balls, fours, sixes, str, matchnumber, venue, date, result) {
    
    let Battingteampath = path.join(__dirname, "IPL","BattingDAta", teamnames)
    dirCreator(Battingteampath)
    // console.log(Battingteampath);
    // console.log(playername1);

    let Battingfilepath = path.join(Battingteampath, playername1 + '.xlsx')
    let Battingcontent=excelReader(Battingfilepath,playername1)
   
    let BattingplayerObj = {
        playername1, 
        teamnames, 
        opponentnames, 
        runs1, 
        balls,
        fours,
        sixes, 
        str, 
        matchnumber, 
        venue, 
        date, 
        result
    }
    
    Battingcontent.push(BattingplayerObj)
    
    excelWriter(Battingfilepath,playername1,Battingcontent)

}

function BowlingprocessPlayer(playername2, teamnames, opponentnames,over,runs2,maiden,wicket,economy, matchnumber, venue, date, result){
    
    let Bowlingteampath = path.join(__dirname, "IPL","BowlingData", opponentnames)
    dirCreator(Bowlingteampath)
    let Bowlingfilepath = path.join(Bowlingteampath, playername2 + '.xlsx')
    let Bowlingcontent=excelReader(Bowlingfilepath,playername2)

    let BowlingplayerObj = {
        playername2, 
        teamnames, 
        opponentnames,  
        over,
        maiden,
        runs2,
        wicket,
        economy,
        matchnumber, 
        venue, 
        date, 
        result
    }

    Bowlingcontent.push(BowlingplayerObj)
    excelWriter(Bowlingfilepath,playername2,Bowlingcontent)
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


module.exports={
    ps:processscorecard
}