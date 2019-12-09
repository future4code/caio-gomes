export class Transactions{
  private cpf: string;
  private value: number;
  private description: string;

  constructor(cpf: string, value: number, description: string) {
      this.cpf = cpf;
      this.value = value;
      this.description = description
  }
} 