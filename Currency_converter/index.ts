#! /usr/bin/env node
import inquirer from "inquirer";

let currConvertRate = {

    "PKR":{
        "PKR": 1,
        "USD":0.00345,
        "EUR":0.00326,
        "AED":0.01269
    },
    "USD":{
        "USD":1,
        "PKR":289.316,
        "EUR":0.95286,
        "AED":3.6725
    },
    "EUR":{
        "EUR":1,
        "PKR":303.546,
        "USD":1.04940,
        "AED":3.85431
    },
    "AED":{
        "AED":1,
        "PKR":78.8056,
        "USD":0.27229,
        "EUR":0.25940
    }
}

type ans = {
    curr1:"USD" | "PKR" | "EUR" | "AED",
    curr2:"USD" | "PKR" | "EUR" | "AED",
    Amt:number
}

const answer: ans = await inquirer.prompt([
{
    type:"list",
    name:"curr1",
    choices:["PKR","USD","EUR","AED"],
    message:"Select which currency you want to convert from ?"
},
{
    type:"list",
    name:"curr2",
    choices:["PKR","USD","EUR","AED"],
    message:"Select which currency you want to convert into ?"
}, 
{
    type:"number",
    name:"Amt",
    message:"Enter amount ?",
}

])

const {Amt,curr1,curr2}= answer;
if(curr1 && curr2 && Amt)
{
   let res= currConvertRate[curr1][curr2] * Amt;
    console.log(`Your conversion from ${curr1} to ${curr2} is ${res}`);   
}
else{ 
    console.log("invalid input");
}

