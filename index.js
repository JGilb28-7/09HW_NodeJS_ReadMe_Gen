// array of questions for user
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// 
//sections entitled Description, Table of Contents, Installation, Usage, 
//License, Contributing, Tests, and Questions
const questions = [
      {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the Name of your Project',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter you Name',
      },
      {
        type: 'input',
        name: 'courseName',
        message: 'Enter your course name',
      },
      {
        type: 'input',
        name: 'courseCode',
        message: 'Enter your Course Description',
      },
      {
        type: 'input',
        name: 'gitHubId',
        message: 'Enter your GitHub Repsitory Name',
      },
      {
        type: 'input',
        name: 'descirption',
        message: 'input the Application Description',
      },
      {
        type: 'input',
        name: 'lnstall',
        message: 'Write your Installation',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your application',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Input your lincense information',
        choices: [
            'MIT Lincense',
            'No Lincense',
        ]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter addtional contributors to this project',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for questions',
      },
    ];
  

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data, (err) => {
    if(err) {
      throw err;
    }
    console.log('File was created');
  });
}



// function to initialize program

function init(){
  inquirer.prompt(questions).then((answers)=> {
    const response = generateMarkdown(answers);
    console.log(answers);
    writeToFile("README.md", response);
  })
};

init();
