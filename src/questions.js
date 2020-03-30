const inquirer = require('inquirer');
module.exports = {
    getAllCases: () => {
        const questions = [
            {
                type: 'list',
                name: 'answer',
                message: 'Select a choice',
                choices: [
                  'See Global Stats',
                  'Get All Countries Totals',
                  'See details about specific country',
                  'Sort all countries',
                ]
              }
        ]

        return inquirer.prompt(questions);
    }
}