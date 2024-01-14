const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose what license you would like to use for your project.",
        choices: [
            {
                name: "GNU General Public License v3.0",
            },
            {
                name: "MIT License",
            },
            {
                name: "Apache License 2.0",
            },
        ],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error)=>error ? console.log(error) : console.log("Success"))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(()=>{
        console.log("hello")
    })
}

// function init() {
//     .then((answers)=>{
//         console.log(answers)
//     })
// }

async function init() {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    writeToFile("./dist/READMEcreate.md",generateMarkdown(answers))
    }

// function call to initialize program
init();
