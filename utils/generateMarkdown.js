let licensebadge = ""
let getLicenseBadge = (data) => {
switch (data) {
  case  "GNU General Public License v3.0":
   return licensebadge = ""
     
  case  "MIT License":
    return licensebadge = ""

  case  "Apache License 2.0":
    return licensebadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  default:
    return licensebadge = ""
    
}};

// function to generate markdown for README
function generateMarkdown(data) {
  getLicenseBadge(data.license)
  return `# ${data.title}
  ${licensebadge}
  
  ## Description

  ${data.description}

  #Table of content
  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## License

  ${data.license}
  
  ## Contributing

  ${data.contributing}
  
  ## Tests
  
  ${data.testing}
  
  ## Questions
  
  ${data.questionOne},
  ${data.questionTwo},
  ${data.questionThree}
`;
}

module.exports = generateMarkdown;
