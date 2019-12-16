"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employee_1 = require("./employee");
const newMenu = index_1.availableDishes;
class Chef extends employee_1.Employee {
    sayJob() { }
    constructor(name, salary, numberOfInstances) {
        super(name, salary, numberOfInstances);
        this.name = 'Caio';
        this.salary = 3000;
        this.numberOfInstances = numberOfInstances;
    }
    static sayJob() {
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
console.log('Pratos no menu', Chef.addDishToMenu({
    name: process.argv[4],
    price: Number(process.argv[5]),
    cost: Number(process.argv[6]),
    ingredients: Array(process.argv[7]),
    timeToCook: Number(process.argv[8])
}));
Chef.sayJob();
//# sourceMappingURL=chef.js.map