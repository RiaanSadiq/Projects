#! /usr/bin/env node
class School {
  name!: string;
  student: any = [];
  teacher: any = [];

  public addStudent(StdObj: any) {
    
    this.student.push(StdObj);
  }


  addTeacher(TecObj: any) {
    this.teacher.push(TecObj);
  }
  

  constructor(name: string) {
    this.name = name;
  }
}

class Teacher {
    name: string;
    age: number;
    schoolName:string
    phoneNo:number
    
    constructor(name:string,age:number,schoolName:string,phoneNo:number)
    {
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
        this.phoneNo=phoneNo
    }
}

class Student extends Teacher
{

    balance:number
    constructor(name:string,age:number,schoolName:string,phoneNo:number,balance:number)
    {
        super(name,age,schoolName,phoneNo)
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
        this.phoneNo=phoneNo;
        this.balance=balance
    }

      viewBalance()
      {
        return this.balance
      }

      payFees()
      {
       return this.balance-45000 
      }
      
      showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Contact: ${this.phoneNo}`);
        console.log(`Tuition Balance: ${this.viewBalance()}`);
        console.log("Paying fees for Enrollment in school");
        console.log("current balance after paying fees is: "+ this.payFees() );
      }
}

//school create
let school1 = new School("HPGS");


//create students
let stu1= new Student("Riaan",21,school1.name,3145687,100000)
let stu2= new Student("Ayaan",21,school1.name,32154698,100000)
let stu3= new Student("Razeen",20,school1.name,32548321,100000)

//create teachers
let t1= new Teacher("Ali",40,school1.name,3547951)
let t2= new Teacher("Zayan",39,school1.name,35481258)
let t3= new Teacher("Mubeen",45,school1.name,32147896)

//adding teachers in school1
school1.addTeacher(t1);
school1.addTeacher(t2);
school1.addTeacher(t3);

//adding students in school1
school1.addStudent(stu1)
school1.addStudent(stu2)
school1.addStudent(stu3)


//printing school obj
console.log(school1);

//student enroll and pay fees function
stu1.showStatus();
console.log();
stu2.showStatus();
console.log();
stu3.showStatus();






