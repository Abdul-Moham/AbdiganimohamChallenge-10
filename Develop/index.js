const inquirer= require("inquirer");
const generateMarkdown= require("./utils/generateMarkdown");
const fs=require('fs')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is your project title?"
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data=>{
        console.log(data)
        fs.writeFileSync()
    })
}

// Function call to initialize app
init();
