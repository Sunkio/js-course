// Your First Code Challenge
// Write code that will return a random letter from your name.

const readline = require('readline');

function randomLetter(name) {
    return `Hey, ${name}! Here's a random letter from your name: ${name[Math.floor(Math.random() * name.length)]}`;
}

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question('What is your name? ', (name) => {
    console.log(randomLetter(name));
    inquirer.close();
});
