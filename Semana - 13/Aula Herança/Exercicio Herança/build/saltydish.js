"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook) {
        super(name, price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
exports.feijoada = new SaltyDish("Feijoada", 100, 20, ["Orelha de porco", "linguiça"], 100);
exports.lasanha = new SaltyDish("Lasanha", 40, 15, ["Massa Fresca", "Molho Bolonhesa", "Queijo"], 2);
//# sourceMappingURL=saltydish.js.map