"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    calculateBill() {
        return this.consumedEnergy * 0.45 + 10000;
    }
}
const client1 = new IndustrialClient('Big Company Inc.', '2.965', '0058-693');
client1.clientName = 'Big Company Inc.';
client1.clientNumber = 5;
client1.consumedEnergy = 5200;
console.log('A tarifa é de: R$', client1.calculateBill().toFixed(2));
const client2 = new IndustrialClient('Big Big Company Inc.', '4.885', '0125-096');
client2.clientName = 'Big Company Inc.';
client2.clientNumber = 6;
client2.consumedEnergy = 15000;
console.log('A tarifa é de: R$', client2.calculateBill().toFixed(2));
//# sourceMappingURL=industrialClient.js.map