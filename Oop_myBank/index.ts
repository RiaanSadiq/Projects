#! /usr/bin/env node
import inquirer from "inquirer";

class Customer {
  FirstName!: string;
  LastName!: string;
  Gender!: string;
  Age!: number;
  ContactNo!: number;
  bankAccount!: BankAccount;

  constructor(
    FirstName: string,
    LastName: string,
    Age: number,
    Gender: string,
    Conctact: number
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Gender = Gender;
    this.ContactNo = Conctact;
    this.bankAccount = new BankAccount();
  }

  CustomerInfo() {
    return `Name: ${this.FirstName} ${this.LastName}
        Age:  ${this.Age}
        Gender: ${this.Gender}
        ContactNo:  ${this.ContactNo}
        Account Balance:  ${this.bankAccount.AccountBalance}`;
  }
}

interface IBankAccount {
  Debit(amount: number): string;
  Credit(amount: number): string;
}

class BankAccount implements IBankAccount {
  AccountBalance!: number;
  Statement!: string;

  constructor() {
    this.AccountBalance = 100;
  }

  Debit(amount: number) {
    this.Statement = "Sorry, you have insufficent balance!";

    if (amount > 0) {
      if (this.AccountBalance > amount) {
        this.AccountBalance = this.AccountBalance - amount;
        this.Statement =
          "Transaction successful! New account balance is " +
          this.AccountBalance +
          "rs";
      } else {
        this.Statement = "You don't have enough money to do this transaction";
      }
    } else {
      this.Statement = "The amount you entered is wrong! ";
    }
    return this.Statement;
  }
  Credit(amount: number) {
    this.Statement = "Transaction failed!";
    if (amount > 0) {
      this.AccountBalance = this.AccountBalance + amount;
      this.Statement = "Your account had been credited successfully!";
    }
    return this.Statement;
  }
}

let c1 = new Customer("Riaan", "Sadiq", 21, "Male", 310265916);
let p1 = new BankAccount();
console.log(c1.CustomerInfo());
console.log(p1.AccountBalance);
console.log(p1.Debit);
console.log(p1.Credit(200));
