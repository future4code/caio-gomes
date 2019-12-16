import { availableDishes } from './index';
import { Employee } from './employee';

export class Cashier extends Employee {
  constructor(name: string, salary: number, numberOfInstances: number) {
    super(name, salary, numberOfInstances);
    this.name = "";
    this.salary = 0;
  }

  public sayJob() {
    console.log('Meu cargo é de Caixa');
  }

  public calculateBill(clientBill: object[]) {
    return clientBill.reduce((acc: any, curr: any )=>{
      return acc + curr.price
    }, 0)
  }
}

const clientBill = new Cashier('Dave', 1500, 1);
console.log("A conta é de:",clientBill.calculateBill(availableDishes));