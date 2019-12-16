"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("./transaction");
class UserAccount {
    constructor(cpf, name, age) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value, description) {
        this.balance += value;
        const transaction = new transaction_1.Transactions(this.cpf, value, description);
        this.transactions.push(transaction);
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=userAccount.js.map