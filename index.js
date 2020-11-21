const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = [manager, engineer, intern];

function promptManager() {
    inquirer
        .prompt([
            {   // There is only 1 manager for a team.
                type: "input",
                message: "Who is the manager of this project?",
                name: "employee"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the manager's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'text',
                name: 'office',
                message: "What is the Manager's office number?"
            },
            {
                type: 'confirm',
                name: 'moreEmployees',
                message: "What you like to add another employee?",
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            manager.push(new Manager(answers.employee, answers.id, answers.email, answers.office))
            // console.log(answers)
            console.log(manager)
            console.log(answers.moreEmployees)
            if (answers.moreEmployees) {
                console.log("Now we will ask for employee information.")
                employeePrompt();
            } else {
                console.log("Thank you.  Check your team page here!")
            }
        })
}


function employeePrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "What is employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'text',
                name: 'employee',
                message: "What your employee's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is your employee's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your employee's email address?"
            },
            {
                type: "input",
                message: "What is the Engineer's Github?",
                name: "github",
                when: (userInput) => userInput.role === "Engineer"
            },
            {
                type: "input",
                message: "What's the Intern's school?",
                name: "school",
                when: (userInput) => userInput.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'moreEmployees',
                message: "Would you like to add another employee?",
            }
        ]).then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            if (answers.role === 'Engineer') {
                engineer.push(new Engineer(answers.employee, answers.id, answers.email, answers.github))
                console.log(employeeArray)
                if (answers.moreEmployees) {
                    console.log("You answered more Employees. Go again!")
                    return employeePrompt();

                } else {
                    console.log("Check out the webpage!")
                }
            } else {
                intern.push(new Intern(answers.employee, answers.id, answers.email, answers.school))
                console.log(employeeArray)
                if (answers.moreEmployees) {
                    console.log("You answered more Employees. Go again!")
                    return employeePrompt();
                } else {
                    console.log("Check out the webpage!")
                }
            }

        })
}


promptManager();
