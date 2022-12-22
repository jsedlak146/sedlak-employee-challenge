//This file is for my manager info 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    };

    getofficeNumber() {
        return this.officeNumber;
    };

    getRole () {
        return "Manager"
    };
}

module.exports = Manager;
