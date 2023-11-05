#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function Welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Lets start Calculation");
  await sleep();
  rainbowTitle.stop();
  console.log(`   _____________________
  |  _________________  |
  | |                 | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|\n\n`);
}

await Welcome();

import { Sum } from "./operations/add.js";
import { Sub } from "./operations/sub.js";
import { Mul } from "./operations/mul.js";
import { Div } from "./operations/div.js";

async function AskQuestion() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "Operator",
        message: chalk.bgCyanBright("Which operation you want to perform ? \n"),
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
      },
      {
        type: "number",
        name: "num1",
      message: "Enter any number : ",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter any number : ",
      },
    ])
    .then((answers) => {
      const { num1, num2, Operator } = answers;
      let result = 0;
      if (Operator == "Addition") {
        result = Sum(num1, num2);
      } else if (Operator == "Subtraction") {
        result = Sub(num1, num2);
      } else if (Operator == "Multiplication") {
        result = Mul(num1, num2);
      } else if (Operator == "Division") {
        result = Div(num1, num2);
      }
      console.log("Answer is " + result);
    });
}

async function StartCalAgain() {
  do {
    await AskQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "Restart",
      message: "Do you want to continue calculating ? Press Y or N : ",
    });
  } while (again.Restart == "Y" || again.Restart == "y");
}

StartCalAgain();
