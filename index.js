const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
const fs = require('fs');
// APP QUESTIONS

const questions =[
    {
        type : 'input',
        name: 'title',
        message :'project title?'
    },{
        type: 'input',
        name: 'description',
        message: 'project description?'

    },{ type: 'input',
        name: 'installation',
        message: 'installation instructions?'


    },{ type: 'input',
        name: 'usage',
        message: 'project usage?'

    },{ type: 'input',
        name: 'contribution',
        message: 'contribution info?'

    },{type: 'input',
        name: 'email',
        message: 'for questions(email)?'

    },{type: 'input',
        name: 'github',
        message: 'for questions(github)?'

    },{type: 'list',
        name: 'license',
        message: 'license',
        choices:['MIT', 'ISC','GMULv3'],
        filter(val){
            return val.toLowerCase();
        }


    }
]
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created readMe!')
  );
}
// RUN QUERY FUNCTION
async function runQuery(){
    return inquirer.prompt(questions)
    .then((answers)=>{
        const markdownContent = generateMarkdown(answers);
        writeToFile("mark.md", markdownContent )
    })
    .catch((error)=>{
        console.log(error)
    });
}

runQuery();