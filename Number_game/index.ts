#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation  from "chalk-animation";


const sleep = () => {
    return new Promise((res) => {
      setTimeout(res, 2000);
    });
  };

  async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("\tLets start Guess Game !!!");
    await sleep();
    rainbowTitle.stop();
  }

 await Welcome();




type ansType = {
    userNum:number
}

async function game() {
    
    const RandomNumber= Math.floor(Math.random()*10);

const ans : ansType = await inquirer.prompt([
    {
type: "number",
message:chalk.bgCyan("\n\n\tEnter any number b/w 1 to 10 : "),
name: "userNum"
    }
])

console.log(`\n\n\tYou guess ${ans.userNum} and computer guess ${RandomNumber}`);

if(ans.userNum=== RandomNumber)
{
    console.log(chalk.greenBright("------------------Correct guess------------------"));
    
}
else
{
console.log(chalk.redBright("------------------Wrong guess------------------"));
}}

async function StartCalAgain() {
    do {
      await game();
      var again = await inquirer.prompt({
        type: "input",
        name: "Restart",
        message: "\nDo you want to continue calculating ? Press Y or N : ",
      });
    } while (again.Restart == "Y" || again.Restart == "y");
  }
  
  StartCalAgain();


