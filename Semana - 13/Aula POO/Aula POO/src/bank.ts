export class Bank {
  private name: string = process.argv[4];
  private cpf: string = process.argv[5];
  private age: number = Number(process.argv[6]);

  constructor(name: string, cpf: string, age: number) {
    this.name = name;
    this.cpf = cpf;
    this.age = age;
  }

  public createAccount(name: string, cpf: string, age: number):void {};
  public getAllAccounts(){};
  public getAccountsByCpf(){};
  public saveAccounts():void{};
}

const newAccount: 