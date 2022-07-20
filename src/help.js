"use strict";
exports.__esModule = true;
/**
 * TODO: Add help commands here
 * use
 * process.argv.forEach((val, index) => {
 * console.log(`${index}: ${val}`)
 * })
 * to get --help or -h flag
 */
var inquirer_1 = require("inquirer");
inquirer_1["default"]
    .prompt([
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
            'Order a pizza',
            'Make a reservation',
            new inquirer_1["default"].Separator(),
            'Ask for opening hours',
            {
                name: 'Contact support',
                disabled: 'Unavailable at this time'
            },
            'Talk to the receptionist',
        ]
    },
    {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
])
    .then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});
