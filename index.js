const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description about your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is your repository link to clone your repository?",
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
            {
                name: "Boost Software License 1.0",
            },
            {
                name: "IBM Public License Version 1.0",
            },
            {
                name: "Mozilla Public License 2.0",
            },
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide guidelines on how to contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing protocols for your project.",
    },
    {
        type: "input",
        name: "questionOne",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "questionTwo",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "questionThree",
        message: "What is your GitHub user URL?",
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
