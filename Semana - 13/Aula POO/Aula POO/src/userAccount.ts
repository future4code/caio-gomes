import {Transactions} from "./transaction";

export class UserAccount {
  private name: string;
  private cpf: string;
  private age: number;
  private transactions: Transactions[];
  private balance: number;

    constructor(cpf: string, name: string, age: number) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
    }

    getBalance(): number {
        return this.balance;
    }

    addBalance(value: number , description: string): void {
        this.balance += value;
        const transaction: Transactions =  new Transactions(this.cpf, value, description);
        this.transactions.push(transaction);
    }
} 