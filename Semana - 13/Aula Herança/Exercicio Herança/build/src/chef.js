"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employee_1 = require("./employee");
class Chef extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = '';
        this.salary = 0;
    }
    sayJob() {
        console.log('Meu cargo é de Chef');
    }
    removeDishFromMenu(dishName) {
        index_1.availableDishes.forEach((dish) => {
            if (dish.name === dishName) {
                index_1.availableDishes.splice(index_1.availableDishes.indexOf(dish), 1);
            }
        });
        return index_1.availableDishes;
    }
    addDishToMenu(dishe) { }
}
const order = new Chef('Caio', 3000);
console.log(order.removeDishFromMenu('Brigadeiro'));
//# sourceMappingURL=chef.js.map