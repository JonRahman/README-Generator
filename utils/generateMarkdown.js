let licensebadge = ""
let getLicenseBadge = (data) => {
switch (data) {
  case  "GNU General Public License v3.0":
   return licensebadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
     
  case  "MIT License":
    return licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"

  case  "Apache License 2.0":
    return licensebadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  case  "Boost Software License 1.0":
    return licensebadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  
    case  "IBM Public License Version 1.0":
      return licensebadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  
      case  "Mozilla Public License 2.0":
    return licensebadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  
  default:
    return licensebadge = ""
    
}};

// function to generate markdown for README
function generateMarkdown(data) {
  getLicenseBadge(data.license)
  return `# ${data.title}
  ${licensebadge}
  
  ## Project Description

  ${data.description}

  ## Table of contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Project Installation
  
  ${data.usage}

  ## How to Use the Project
  
  To clone the repo:
  
    git clone ${data.installation}

  ## License

  License used for this project - ${data.license}
  
  ## Contribute to the Project

  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Name: ${data.questionOne},
  Email: ${data.questionTwo},
  GitHub: ${data.questionThree}
`;
}

module.exports = generateMarkdown;
