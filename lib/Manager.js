//imports Employee module
const Employee = require("./Employee");
//Manager class with Employee extension
class Manager extends Employee {
    //Manager constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //defines 
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;