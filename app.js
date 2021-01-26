const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamArray = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "What team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Done; Please build my team." 
        ]
        },
    ])
    .then (res => {
        switch (res.teamMember){
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                buildTeam();
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Managers' name:"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the Managers' id:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Managers' email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Managers' office number:"
        },
    ])
    .then (res => {
        const manager = new Manager (res.managerName, res.managerId, res.managerEmail, res.officeNumber);
        teamArray.push(manager);
        addTeamMember();
    })
}

function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is this Engineers' name?:"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is this Engineers' id?:"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is this Engineers' email?:"
            },
            {
                type: "input",
                name: "github",
                message: "What is this Engineers' Github username?:"
            },
        ])
        .then (res => {
            const engineer = new Engineer (res.engineerName, res.engineerId, res.engineerEmail, res.github);
            teamArray.push(engineer);
            addTeamMember();
        })
    }


function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is this Interns' name?:"
        },
        {
            type: "input",
            name: "internId",
            message: "What is this Interns' id?:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is this Interns'' email?:"
        },
        {
            type: "input",
            name: "school",
            message: "What school did this intern attend?:"
        },
    ])
    .then (res => {
        const intern = new Intern (res.internName, res.internId, res.internEmail, res.school);
        teamArray.push(intern);
        addTeamMember();
    })
}

function buildTeam () {
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
} 


addManager();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
