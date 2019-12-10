import { Cashier } from "./cashier";

class Manager extends Cashier{
  constructor(name: string, salary: number) {
    super(name, salary);
    this.name = "";
    this.salary = 0;
  }

  public sayJob() {
    console.log('Meu cargo é de Gerente');
  }
}