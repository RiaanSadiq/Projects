#! /usr/bin/env node
import inquirer from 'inquirer';

const questions = [
    {
        question: "1 kilobyte (kb) = ___bytes ?",
        choices: ["1024", "1000", "1275"],
        correctAnswer: "1024",
    },
    {
        question: "Which among the following is not a type of printer?",
        choices: ["Laser Printer", "LCD Printer", "Electro Thermal Printer"],
        correctAnswer: "LCD Printer",
    },
    {
        question: "What is software?",
        choices: ["any part of the computer that has a physical structure", "flexible parts of a computer case", "instructions that tell the hardware what to do"],
        correctAnswer: "instructions that tell the hardware what to do",
    },
    {
        question: "The computer's main circuit board is called a ______?",
        choices: ["monitor", "motherboard", "Bluetooth card"],
        correctAnswer: "motherboard",
    }
];

function runQuiz() {
    let score = 0;

    const askQuestion = async (index: number) => {
        if (index >= questions.length) {
            console.log(`Quiz completed! You scored ${score} out of ${questions.length}.`);
            return;
        }

        const questionData = questions[index];
        const { question, choices, correctAnswer } = questionData;

        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question,
                choices: choices,
            },
        ]);

        if (answer.userAnswer === correctAnswer) {
            console.log("Correct!\n");
            score++;
        } else {
            console.log(`Wrong. The correct answer is: ${correctAnswer}\n`);
        }

        askQuestion(index + 1);
    };
    console.log("\tWelcome to Computer sceience quiz");

    
     askQuestion(0);
}

 runQuiz();
