#! /usr/bin/env node
import inquirer from "inquirer";

class Person {
    private personality !:string;

    constructor()
    {
    this.personality="Mystery"
    }

    askQuestion(answer:number)
    {
        if(answer==1)
        {
            this.personality="Extravert";
        }
        else if(answer==2)
        {
            this.personality="Introvert";
        }
        else
        {
            this.personality="Mystery";
        }
    }

    getPersonality()
    {
        return this.personality;
    }
}

class Student extends Person
{
    private _name ! :string
    constructor()
    {
        super();
        this._name=""
    }
    
    GetName()
    {
        return this._name;
    }
    SetName(name:string)
    {
        this._name=name
    }
    


}


type ansType = {
    userNum:number
    name:string
}

async function Program() {
    
const ans : ansType = await inquirer.prompt([
   {
    type: "string",
    message:("\n\n\tEnter your name :  "),
    name: "name"
   }
    , {
type: "number",
message:("\n\n\tType 1 if you like to talk to other and type 2 if you would rather keep to yourself :  "),
name: "userNum"
    }
])


   let p1 =new Person();
   let s1= new Student();
   s1.SetName(ans.name)
   p1.askQuestion(ans.userNum)
   //getting default answer mystery  
   console.log("\n\t"+s1.GetName()+" you are and " + s1.getPersonality()); 
   

}

Program()