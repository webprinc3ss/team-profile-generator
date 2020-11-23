const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')
const validator = require('validator');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = [manager, engineer, intern];

function promptManager() {
    console.log(`
    ====================================
    Please Fill out Manager Information
        All questions are required.
    ====================================
    `)
    return inquirer
        .prompt([
            { // There is only 1 manager for a team.
                type: "input",
                message: "Who is the manager of this project? (Required)",
                name: "employee",
                validate(employee) {
                    if (validator.isAlpha(employee)) {
                        return true;
                    } else {
                        console.log('Please enter a valid name!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the manager's ID number? (Required)",
                validate(id) {
                    if (validator.isNumeric(id)) {
                        return true;
                    } else {
                        console.log('You must enter a numeric value!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the manager's email? (Required)",
                validate(email) {
                    if (validator.isEmail(email)) {
                        return true;
                    } else {
                        console.log('You must enter a valid email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the Manager's office number? (Required)",
                validate(office) {
                    if (/^(\([0-9]{3}\)|[0-9]{3})\s*[0-9]{3}\s*-?\s*[0-9]{4}$/.test(office)) {
                        return true;
                    } else {
                        console.log('Office number please!');
                        return "Please enter an office number";
                    }
                }
            },
            {
                type: 'list',
                name: 'moreEmployees',
                message: "Would you like to add another employee? (Required)",
                choices: [
                    {
                        name: "yes",
                        value: true,
                    },
                    {
                        name: "no",
                        value: false,
                    },
                ]
            }
        ])

}


function employeePrompt() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "What is employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'text',
                message: "What your employee's name? (Required)",
                name: "employee",
                validate(employee) {
                    if (validator.isAlpha(employee)) {
                        return true;
                    } else {
                        console.log('Please enter a valid name!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is your employee's ID number? (Required)",
                validate(id) {
                    if (validator.isNumeric(id)) {
                        return true;
                    } else {
                        console.log('You must enter a numeric value!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your employee's email address? (Required)",
                validate(email) {
                    if (validator.isEmail(email)) {
                        return true;
                    } else {
                        console.log('You must enter a valid email address!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Engineer's Github? (Required)",
                name: "github",
                when: (userInput) => userInput.role === "Engineer",
                validate(github) {
                    if (github) {
                        return true;
                    } else {
                        console.log('You must enter a Github username!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What's the Intern's school? (Required)",
                name: "school",
                when: (userInput) => userInput.role === "Intern",
                validate(school) {
                    if (school) {
                        return true;
                    } else {
                        console.log('You must enter a school!');
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'moreEmployees',
                message: "Would you like to add another employee? (Required)",
                choices: [
                    {
                        name: "yes",
                        value: true,
                    },
                    {
                        name: "no",
                        value: false,
                    },
                ]
            }
        ]).then(answers => {
            // console.log(answers)
            if (answers.role === 'Engineer') {
                engineer.push(new Engineer(answers.employee, answers.id, answers.email, answers.github))
                if (answers.moreEmployees) {
                    console.log(`
                ====================================
                        Enter Another Employee
                ====================================
                    `)
                    return employeePrompt();

                } else {
                    console.log("Your Team page has been generated!")
                }
            } else {
                intern.push(new Intern(answers.employee, answers.id, answers.email, answers.school))
                if (answers.moreEmployees) {
                    console.log(`
                ====================================
                        Enter Another Employee
                ====================================
                    `)
                    return employeePrompt();
                } else {
                    console.log("Check out the webpage!")

                }
            }
        })
}

promptManager()
    .then(answers => {
        manager.push(new Manager(answers.employee, answers.id, answers.email, answers.office))
        if (answers.moreEmployees) {
            console.log(`
                ====================================
                        Enter Another Employee
                ====================================
                    `)
            return employeePrompt();
        } else {
            // console.log(employeeArray)
            console.log("Thank you. Your Team page has been generated!")
        }
    })
    .then(() => generatePage(employeeArray))
    .then(pageHTML => {
        return writeFile(pageHTML)
    });