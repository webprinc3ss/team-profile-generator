const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')
const validator = require('validator');


const employeeArray = []

const promptManager = () => {
    console.log("BUILD YOUR TEAM!");
    return inquirer.prompt([
        {
            type: 'list',
            name: 'moreEmployees',
            message: "Are you the manager? (Required)",
            choices: [
                {
                    name: "yes",
                    value: true,
                },
                {
                    name: "no",
                    value: false,

                },
            ],
            validate(moreEmployees) {
                if (true) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        }]);
};

const employeePrompt = (role) => {
    console.log(role);
    console.log("ADD AN EMPLOYEE!");
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: "What is the Manager's phone number? (Required)",
                when: (answers) => role === "Manager",
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
                type: 'text',
                message: "Name? (Required)",
                name: "name",
                validate(name) {
                    if (validator.isAlpha(name)) {
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
                message: "ID number? (Required)",
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
                message: "Email address? (Required)",
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
                when: (answers) => role === "Engineer",
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
                when: (answers) => role === "Intern",
                validate(school) {
                    if (school) {
                        return true;
                    } else {
                        console.log('You must enter a school!');
                        return false;
                    }
                },
            },
        ])
}

const createEmployee = (role) => {
    if (role === "Manager") {
        return employeePrompt(role).then(
            ({ name, id, email, office }) => new Manager(name, id, email, office)
        );
    } else if (role === "Engineer") {
        return employeePrompt(role).then(
            ({ name, id, email, github }) => new Engineer(name, id, email, github)
        );
    } else if (role === "Intern") {
        return employeePrompt(role).then(
            ({ name, id, email, school }) => new Intern(name, id, email, school)
        );
    }
}

const employeeRole = () => {
    console.log("CHOOSE YOUR ROLE!");
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: "Employee role: (Required)",
                choices: ['Manager', 'Engineer', "Intern", "I'm Done!"]
            },
        ]).then(({ choice }) => choice);
};

const loop = () => {
    return employeeRole()
        .then(createEmployee)
        .then((employee) => {
            if (employee) {
                employeeArray.push(employee)
                return loop();
            }
        });
}

promptManager()
    .then(() => loop())
    .then(() => console.log(employeeArray))
    // .then(() => generatePage(employeeArray))
    // .then(() => writeFile(pageHTML))



