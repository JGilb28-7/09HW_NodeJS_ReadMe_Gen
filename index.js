// array of questions for user
const inquirer = require('inquirer')
const fs = require('fs')
//const questions = 
//sections entitled Description, Table of Contents, Installation, Usage, 
//License, Contributing, Tests, and Questions
inquirer.prompt([
       {
        type: 'input',
        name: 'Name',
        message: 'Enter you Name',
      },
      {
        type: 'input',
        name: 'Course Name',
        message: 'Enter your course name',
      },
      {
        type: 'input',
        name: 'Course code',
        message: 'Enter your Course Description',
      },
      {
        type: 'input',
        name: 'GitHubID',
        message: 'Enter your GitHub Repsitory Name',
      },
      {
        type: 'input',
        name: 'Descirption',
        message: 'input the Application Description',
      },
      {
        type: 'input',
        name: 'Table',
        message: 'input the Table of Contents',
      },
      {
        type: 'input',
        name: 'lnstall',
        message: 'Write your Installation',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Descript the usage of your application',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Input your lincense information',
      },
      {
        type: 'input',
        name: 'tests',
        message: '',
      },
    ]).then((response) => {
      console.log(response)
    })
  

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
