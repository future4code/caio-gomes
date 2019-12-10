"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employee_1 = require("./employee");
const newMenu = index_1.availableDishes;
class Chef extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = 'Caio';
        this.salary = 3000;
    }
    sayJob() {
        console.log('Meu cargo é de Chef');
    }
    static removeDishFromMenu(dishName) {
        newMenu.forEach((dish) => {
            if (dish.name === dishName) {
                newMenu.splice(newMenu.indexOf(dish), 1);
            }
        });
        return newMenu;
    }
    static addDishToMenu(dish) {
        newMenu.push(dish);
        return newMenu;
    }
}
console.log(Chef.removeDishFromMenu(process.argv[4]));
//# sourceMappingURL=chef.js.map