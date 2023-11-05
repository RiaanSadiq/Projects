#! /usr/bin/env node
import inquirer from "inquirer";
let ToDo = [];
let Too = ["w", "e"];
let loop = true;
let answer;
async function Start() {
    while (loop) {
        await StartMenu();
    }
}
await Start();
async function StartMenu() {
    answer = await inquirer.prompt([
        {
            name: "StartOption",
            type: "list",
            message: "Select Your Option",
            choices: ["Add ToDo", "Delete ToDo", "Exit"],
        },
    ]);
    if (answer.StartOption === "Add ToDo") {
        await Add_ToDo();
    }
    else if (answer.StartOption === "Delete ToDo") {
        await Del_ToDo();
    }
    else {
        loop = false;
    }
}
async function Add_ToDo() {
    answer = await inquirer.prompt([
        {
            type: "input",
            name: "AddToDo",
            message: "Enter what you want to add ?"
        }
    ]);
    ToDo.push(answer.AddToDo);
    console.log(answer.AddToDo + " Added succesfully");
}
async function Del_ToDo() {
    if (ToDo.length > 0) {
        answer = await inquirer.prompt([
            {
                type: "list",
                name: "DelToDo",
                message: "Select what you want to Delete ?",
                choices: ToDo,
            }
        ]);
        let i = 0;
        do {
            if (ToDo[i] === answer.DelToDo) {
                ToDo.splice(i, 1); // which element to delete and how many 
                console.log(ToDo);
            }
            i++;
        } while (i < ToDo.length);
        {
            console.log(ToDo);
        }
    }
    else {
        console.log("No item in your ToDo list");
    }
}
