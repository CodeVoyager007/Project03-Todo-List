#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgCyan("TODO LIST"));
console.log(chalk.yellow("=============================================="));
const todos = [];
async function main() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Choose an action:',
                choices: ['Add a task', 'View tasks', 'Exit'],
            },
        ]);
        switch (action) {
            case 'Add a task':
                await addTask();
                break;
            case 'View tasks':
                viewTasks();
                break;
            case 'Exit':
                console.log(chalk.green('Goodbye! Your final task list:'));
                viewTasks();
                return;
        }
    }
}
async function addTask() {
    const { todo } = await inquirer.prompt({
        name: 'todo',
        type: 'input',
        message: 'What do you want to add to your todos?',
    });
    todos.push(todo);
    console.log(chalk.green('Task added successfully!'));
}
function viewTasks() {
    if (todos.length === 0) {
        console.log(chalk.yellow('No tasks yet.'));
    }
    else {
        console.log(chalk.cyan('Your tasks:'));
        todos.forEach((task, index) => {
            console.log(chalk.cyan(`  • ${task}`));
        });
    }
}
main();
