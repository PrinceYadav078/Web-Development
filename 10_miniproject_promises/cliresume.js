const inquirer = require('inquirer');
const cp = require("child_process");
const { start } = require('repl');

function displaylist() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                choices: ['About', 'Skills', 'Academics', 'Projects']

            }
        ])
        .then(function (ans) {
            if (ans.selection == 'About') {
                console.log('this is about section')
                displaynext()
            }
            else if (ans.selection == "Skills") {
                console.log('java, JsvaScript, HTML, CSS, NodeJS,')
                displaynext()
            } else if (ans.selection == 'Academics') {
                cp.execSync("start chrome https://drive.google.com/file/d/1nJNxupepu7zamv27B-1JTNHwtLGYmWAB/view")
                displaynext()
            } else if (ans.selection == 'Projects') {
                cp.execSync("start chrome https://github.com/PrinceYadav078")
                displaynext()
            }
        })

}

displaylist()

//GO BACK OPTION

function displaynext() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "Selection",
                choices: ["Go Back", "Exit"]
            }
        ])
        .then(function (ans) {
            if (ans.Selection == "Go Back") {
                displaylist()
            } else {
                console.log("Resume closed")
            }
        })
}