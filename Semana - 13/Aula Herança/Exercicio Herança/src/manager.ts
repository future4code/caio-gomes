import { Cashier } from './cashier';

class Manager extends Cashier {
  constructor(name: string, salary: number, numberOfInstances: number) {
    super(name, salary, numberOfInstances);
    this.name = '';
    this.salary = 0;
  }

  public sayJob() {
    console.log('Meu cargo é de Gerente');
  }
}
