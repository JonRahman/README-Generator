let licensebadge = ""
let getLicenseBadge = (data) => {
  switch (data) {
    case "GNU General Public License v3.0":
      return licensebadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

    case "MIT License":
      return licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"

    case "Apache License 2.0":
      return licensebadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

    case "Mozilla Public License 2.0":
      return licensebadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

    case "Public Domain Dedication and License":
      return licensebadge = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"

    case "Boost Software License 1.0":
      return licensebadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

    default:
      return licensebadge = ""

  }
};

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
