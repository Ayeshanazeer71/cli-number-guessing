#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) User  input for guessing number 
// 3) computer user input with computer generted number and show results
const randomNumber = Math.floor(Math.random() * 10 + 1);
const anwers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please enter a number between 1-10",
    },
]);
console.log(anwers);
if (anwers.userGuessedNumber === randomNumber) {
    console.log("congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
