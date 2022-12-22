//This file is for my Engineeer info

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email) 
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole () {
        return "Engineer";
    };
}

//getGithub
//getRole --- engineer

//const eng = new Engineer("joe", "6", "joe@gmail", "github")
//console.log(eng.getGithub())
module.exports = Engineer;