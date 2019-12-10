import { availableDishes } from './index';
import { Dish } from './dish';
import { Employee } from './employee';

const newMenu = availableDishes;

class Chef extends Employee {
  constructor(name: string, salary: number, numberOfInstances: number) {
    super(name, salary, numberOfInstances);
    this.name = 'Caio';
    this.salary = 3000;
    this.numberOfInstances = numberOfInstances;
  }

  public sayJob() {
    console.log('Meu cargo é de Chef');
  }

  public static removeDishFromMenu(dishName: string) {
    newMenu.forEach((dish: any) => {
      if (dish.name === dishName) {
        newMenu.splice(newMenu.indexOf(dish), 1);
      }
    });
    return newMenu;
  }

  public static addDishToMenu(dish: Dish) {
    newMenu.push(dish);
    return newMenu;
  }
}

console.log(Chef.removeDishFromMenu(process.argv[4]));
console.log(
  'Pratos no menu',
  Chef.addDishToMenu({
    name: process.argv[4],
    price: Number(process.argv[5]),
    cost: Number(process.argv[6]),
    ingredients: Array(process.argv[7]),
    timeToCook: Number(process.argv[8])
  })
);
