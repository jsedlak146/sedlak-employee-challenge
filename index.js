//creating sections for libraries to use
const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const team = [];

//use arrays to create the questions for each type of employee
const question = {
  engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is your engineer's employee ID?",
      name: "engineerID",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is your engineer's Github username?",
      name: "engineerGithub",
    },
    {
      type: "list",
      message: "Which team member would you like to add?",
      name: "menu",
      choices: ["add engineer", "add intern", "none, I am finished"],
    },
  ],

  intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is your intern's employee ID?",
      name: "internID",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What is your intern's school?",
      name: "internSchool",
    },
    {
      type: "list",
      message: "Which team member would you like to add?",
      name: "menu",
      choices: ["add engineer", "add intern", "none, I am finished"],
    },
  ],

  manager: [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is your manager's employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is your managers office number?",
      name: "managerOffice",
    },
    {
      type: "list",
      message: "Which team member would you like to add?",
      name: "menu",
      choices: ["add engineer", "add intern", "none, I am finished"],
    },
  ],
};

//These functions will add all of my information for the various roles

function addIntern() {
  return inquirer.prompt(question.intern).then((answers) => {
    let employee = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    employee.special = answers.internSchool;
    team.push(employee);
    if (answers.menu === "add engineer") {
      return addEngineer();
    } else if (answers.menu === "add intern") {
      return addIntern();
    } else {
      buildTeam();
    }
  });
}

function addEngineer() {
  return inquirer.prompt(question.engineer).then((answers) => {
    let employee = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGithub
    );
    employee.special = answers.engineerGithub;
    team.push(employee);
    if (answers.menu === "add engineer") {
      return addEngineer();
    } else if (answers.menu === "add intern") {
      return addIntern();
    } else {
      buildTeam();
    }
  });
}

//this function builds my HTML file

function buildTeam() {
  let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width", initial-scale="1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudfare.come/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="./css/style.css">
<title>Employee Team Generator</title>
</head>
<body>

    `;

//loop to create cards and values

  for (let i = 0; i < team.length; i++) {
    html += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${team[i].getRole()}</h5>
        <p class="card-text">${team[i].name}</p>
        <p class="card-text">${team[i].id}</p>
        <p class="card-text">${team[i].email}</p>
        <p class="card-text">${team[i].special}</p>
        <a href="#" class="card-link">${team[i].email}</a>
      </div>
    </div>
        `;
  }
  html += `
    <script src="https://cdjns.c;oudfare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudfare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudfare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap/min.js"></script>
    </body>
    </html>
    `;
  console.log("generating HTML file now");
  fs.writeFileSync("./dists/team.html", html);
}

//this function runs my program
function inti() {
  inquirer.prompt(question.manager).then((answers) => {
    let employee = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.managerOffice
    );
    employee.special = answers.managerOffice;
    team.push(employee);
    if (answers.menu === "add engineer") {
      return addEngineer();
    } else if (answers.menu === "add intern") {
      return addIntern();
    } else {
      buildTeam();
    }
  });
}

//init call for app
inti();
