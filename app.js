//import modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//create empty teamArray to push new members into
const teamArray = [];
//variables to resolve and join file paths to team.html, for rendering
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//function to add team different members
function addTeamMember() {
    //inquirer prompt initiated
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
        //after prompt is answered then...
        .then(res => {
            //switch statement hadling team memeber type
            switch (res.teamMember) {
                //if Engineer...
                case "Engineer":
                    //then
                    return addEngineer();
                //if Intern...
                case "Intern":
                    //then
                    return addIntern();
                //default staement for "Done; Please build my team." 
                default:
                    //calls buildTeam function
                    buildTeam();
            }
        })
}
// function to add manager
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
        //take that response and then...
        .then(res => {
            //manager variable consiting of info from prompt
            const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber);
            //push variable to teamArray
            teamArray.push(manager);
            //call addTeamMember function
            addTeamMember();
        })
}
//function to add Engineer
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
    ])  //take that response and then...
        .then(res => {
            //engineer variable containing new info
            const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.github);
            //push variable to teamArray
            teamArray.push(engineer);
            //call addTeamMember function
            addTeamMember();
        })
}
//function to add an Intern
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
    ])  //take that response and then...
        .then(res => {
            // intern variable containg new intern info
            const intern = new Intern(res.internName, res.internId, res.internEmail, res.school);
            //push variable into teamArray
            teamArray.push(intern);
            //calls addTeamMember function
            addTeamMember();
        })
}
//function to buildTeam
function buildTeam() {
    //runs teamArray info through render module and delvers the data to the outputPath variable specified as 'team.html' in line 13
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}
//adds addManager function which acts to initate the entire app
addManager();