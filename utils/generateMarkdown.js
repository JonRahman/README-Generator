let licensebadge = ""
let getLicenseBadge = (data) => {
switch (data) {
  case  "GNU General Public License v3.0":
   return licensebadge = ""
     
  case  "MIT License":
    return licensebadge = ""

  case  "Apache License 2.0":
    return licensebadge = ""
  default:
    return licensebadge = ""
    
}};

// function to generate markdown for README
function generateMarkdown(data) {
  getLicenseBadge(data.license)
  return `# ${data.title}

  ## Description

  ${data.description}
  ${licensebadge}

  ## Table of Contents
  
  ## Table of Contents
  
  ## Table of Contents
  
  ## Table of Contents
  
  
`;
}

module.exports = generateMarkdown;
