const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require("./utiles/generateHTML");

const teamArr = [];
const addManager =() => {
    return (
        inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Manager's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Manager's ID?",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Manager's email?",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "officeNumber",
                type: "input",
                message: "What is the Manager's direct office line?",
                validate: (officeNumber) => {
                    if (officeNumber) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.officeNumber
            );
            teamArr.push(manager);
            addEmployee();
        })
    );
};

const addEngineer = () => {
    return (
        inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Engineer's name?",
                validate: (name) => {
                    if (name) {
                        return true; 
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Engineer's ID?",
                validate: (id) => {
                    if (id) {
                        return true; 
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Engineer's email?",
                validate: (email) => {
                    if (email) {
                        return true; 
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "userName",
                type: "input",
                message: "What is the Engineer's GitHub username?",
                validate: (userName) => {
                    if (userName) {
                        return true; 
                    } else {
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email, 
                answers.userName
            );
            teamArr.push(engineer);
            addEmployee();
        })
    );
};

const addIntern = () => {
    return (
        inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Intern's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "id",
                type: "input",
                message: "What is the Intern's ID?",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "email",
                type: "input",
                message: "What is the Intern's email?",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            {
                name: "school",
                type: "input",
                message: "What school is your Intern enrolled in?",
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.school
            );
            teamArr.push(intern);
            addEmployee();
        })
    );
};

const addEmployee = () => {
    return (
        inquirer
        .prompt([
            {
                name: "employee",
                type: "list",
                message: 
                "Select the employee type you are updating or done.",
                choices: ["Engineer", "Intern", "Done building"],
            },
        ])
        .then((chosen) => {
            switch (chosen.employee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                    startHtml();
            }
        })
    );
};

function startHtml() {
    const dom = generateHTML(teamArr);
    fs.writeFile("index.html", dom, function (err) {
        if (err) throw err;
        console.log("Excellent work!");
    });
}

function init() {
    addManager();
}

init();