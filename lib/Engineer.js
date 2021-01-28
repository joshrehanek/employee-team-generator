//imports Employee module
const Employee = require("./Employee");
// Engineer class with Employee class extension
class Engineer extends Employee {
    //Engineer constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //defines getGithub function
    getGithub() {
        return this.github;
    }
    //defines getRole function
    getRole() {
        return "Engineer";
    }
}
//exports Engineer module
module.exports = Engineer;