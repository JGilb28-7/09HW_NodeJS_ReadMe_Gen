// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.projectTitle}
## ${response.name}
## ${response.courseName}
## ${response.courseCode}
## ${response.gitHubId}
### Resources
-[Add Resources here]


### supporting .img or .png

## Table of Contents
-[Description](#descirption)
-[Installation](#install)
-[Application Usage](#usage)
-[Project Contribution](#contributing)
-[Project Questions](#questions)
-[License](#license)

### Description
${response.descirption}

### Installation
${response.install}

### Application Usage
${response.usage}

### Project Conributors
${response.contributing}

### Application Questions
GitHub:[${response.gitHubId}]
Emmail:[${response.email}]

### License Information
${response.license}
`;
}

module.exports = generateMarkdown;
