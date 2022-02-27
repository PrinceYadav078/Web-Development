const fs = require("fs")

const xlsx = require("xlsx")

// let buffer= fs.readFileSync("./example.json")

// // console.log(buffer)

// let data= JSON.parse(buffer) // this method is used to convert buffer or any type of data to JSON
// // console.log(data)

let jasonfile = require("./example.json") //requiring jasonfile

jasonfile.push({
    "name": "Thor",
    "last name": "Odinson",
    "isAvengers": true,
    "age": 102,
    "friends": ["Steve", "Peter", "Bruce"],
    "address": {
        "Planet": "Asguard"
    }
})
//pushing a new object into jsonfile
// console.log(data)

let stringdata = JSON.stringify(jasonfile)
// converting jsondata into string so that we can wrte it in other files

// console.log(stringdata)

fs.writeFileSync("example.json", stringdata)

console.log("jason file updated")


//JSON TO EXCEL
let newWB = xlsx.utils.book_new();
// CREATING A NEW WORKBOOK
let newWS = xlsx.utils.json_to_sheet(jasonfile); 
//JSON IS CONVERING TO SHEET FORMAT (ROWS & COL)
xlsx.utils.book_append_sheet(newWB, newWS, "AVENGERS"); 
xlsx.writeFile(newWB, 'abc.xlsx');


//EXCEL TO JSON
let wb = xlsx.readFile('abc.xlsx');
let excelData = wb.Sheets['AVENGERS'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans)