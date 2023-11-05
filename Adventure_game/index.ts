#! /usr/bin/env node
import inquirer from "inquirer";

const enemies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"];
const maxEnemyHealth: number = 75;
let enemyAttackDamage = 25;

let running: boolean = true;
//player
let health: number = 100;
let attackDamage = 50;
let numHealthPortion = 3;
let healthPortionHealAmount = 30;
let portionDropChance = 50;

async function game() {
  while (running) {
    console.log("---------------------------------------------");
    let enemyHealth: number = Math.floor(Math.random() * maxEnemyHealth);
    let enemy: string = enemies[Math.floor(Math.random() * enemies.length)];
    console.log("\t# " + enemy + " appeared! #\n");

    while (enemyHealth > 0 && health > 0) {
      console.log("\tYour HP: " + health);
      console.log("\t" + enemy + "'s HP: " + enemyHealth);
      console.log("\n\tWhat would you like to do?");

      const userInput = await inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: "Choose an action:",
          choices: ["Attack", "Drink health potion", "Run"],
        },
      ]);

      switch (userInput.choice) {
        case "Attack":
          let DamageTaken: number = Math.floor(
            Math.random() * enemyAttackDamage
          );
          let damageGiven: number = Math.floor(Math.random() * attackDamage);
          enemyHealth -= damageGiven;
          health -= DamageTaken;
          console.log(
            "\tYou attacked " + enemy + " for " + damageGiven + " damage!"
          );
          console.log("\tYou recieved " + DamageTaken + " damage!");

          if (health < 1) {
            console.log(
              "You have taken too much damage, you are too weak to go on!"
            );
            break;
          }

          break;
        case "Drink health potion":
          if (numHealthPortion > 0) {
            health += healthPortionHealAmount;
            numHealthPortion--;
            console.log(
              "\t You drink a health portion, healing yourself for " +
                healthPortionHealAmount +
                " . " +
                "\n\t You now have " +
                health +
                " HP" +
                "\n\t You have " +
                numHealthPortion +
                "health portion left . \n"
            );
          } else {
            console.log(
              "\t> you have no health portion left Defeat enemies for a chance to get one!\n"
            );
          }
          break;
        case "Run":
          console.log("\tYou ran away from " + enemy + "!");
          break;
        default:
          console.log("\tInvalid choice. Please choose an action.");
          break;
      }

      if (Math.floor(Math.random() * 100) < portionDropChance) {
        numHealthPortion++;
        console.log(" # The " + enemy + " dropped a health portion! # ");
        console.log(
          " # You now have " + numHealthPortion + " health portion left! # "
        );
      }
    }

    console.log("---------------------------------------------------");
    console.log(" # " + enemy + " was defeated! #");
    console.log(" # You have " + health + " HP left. #");

    if (health < 0) {
      console.log("You are out of the game, weak for battle");
      break;
    }
  }
}

(async () => {
  await game();
})();
