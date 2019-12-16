"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = "";
        this.salary = 0;
    }
    sayJob() {
        console.log('Meu cargo é de Caixa');
    }
    calculateBill(clientBill) {
        return clientBill.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
    }
}
exports.Cashier = Cashier;
const clientBill = new Cashier('Dave', 1500);
console.log("A conta é de:", clientBill.calculateBill(index_1.availableDishes));
//# sourceMappingURL=cashier.js.map