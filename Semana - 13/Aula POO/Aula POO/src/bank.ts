export class Bank {
  private name: string = process.argv[4];
  private cpf: string = process.argv[5];
  private age: number = Number(process.argv[6]);

  constructor(name: string, cpf: string, age: number) {
    this.name = name;
    this.cpf = cpf;
    this.age = age;
  }

  static createAccount(name: string, cpf: string, age: number): void {
    if (age < 18) {
      console.log('Não é permitido abertura de conta para menores de 18 anos!');
    } else {
    }
  }
}

const account = new Bank('Caio', '395.988.965-44', 26)

console.log(account)
