"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(name, cpf, age) {
        this.name = process.argv[4];
        this.cpf = process.argv[5];
        this.age = Number(process.argv[6]);
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }
    static createAccount(name, cpf, age) {
        if (age < 18) {
            console.log('Não é permitido abertura de conta para menores de 18 anos!');
        }
        else {
        }
    }
}
exports.Bank = Bank;
const account = new Bank('Caio', '395.988.965-44', 26);
console.log(account);
//# sourceMappingURL=bank.js.map