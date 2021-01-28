//Employee class
class Employee {
    //constructor with name, id, email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //defines getName function
    getName() {
        return this.name;
    }
    //defines getId function
    getId() {
        return this.id;
    }
    //defines get email function
    getEmail() {
        return this.email;
    }
    //defines get role function
    getRole() {
        return "Employee";
    }
}
//export module
module.exports = Employee;