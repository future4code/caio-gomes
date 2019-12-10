"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    constructor(name, salary, numberOfInstances) {
        super(name, salary, numberOfInstances);
        this.name = '';
        this.salary = 0;
    }
    sayJob() {
        console.log('Meu cargo é de Gerente');
    }
}
//# sourceMappingURL=manager.js.map