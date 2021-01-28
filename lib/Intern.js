//import Employee module
const Employee = require("./Employee");
//Intern class with Employee extension
class Intern extends Employee {
    //Intern constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //defines getSchool function
    getSchool() {
        return this.school;
    }
    //defines getRole function
    getRole() {
        return "Intern";
    }
}
//exports Intern module
module.exports = Intern;