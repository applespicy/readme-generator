When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.
I created a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). The application will be invoked with the following command: node index.js

Because this is a command-line application won’t be deployed, here is a <a href="https://drive.google.com/file/d/1jhs_rYghvR3DapjZtg_0xCQfjhRGbbyg/view" target="_blank">Link</a> to a video walkthrough that demonstrates the functionality of my application.

## User Story
```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
Application Requirements
* Functional application.
* Here is my <a href="https://github.com/applespicy/readme-generator" 

 The generated README includes the following sections: 
  * Title
  * Description
  * Installation
  * Usage
  * License
  * Contributing
  * email
  * Questions

 Environment
* JavaScript
* Node.js

 Contributors 
* oluwaseyi oshinowo
```