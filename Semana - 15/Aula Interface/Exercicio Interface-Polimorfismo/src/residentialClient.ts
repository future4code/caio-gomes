import { Client } from './client';
import { Residence } from './residence';
class ResidentialClient extends Residence implements Client {
  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  constructor(name: string, cpf: string, cep: string) {
    super(name, cpf, cep);
  }
  
  calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

const client1 = new ResidentialClient('Caio', '965.564.897-55', '09841-692');
client1.clientName = 'Caio';
client1.clientNumber = 1;
client1.consumedEnergy = 80;
console.log('A tarifa é de: R$', client1.calculateBill().toFixed(2));

const client2 = new ResidentialClient('Chuck', '654.254.963-88', '08125-635');
client2.clientName = 'Chuck';
client2.clientNumber = 2;
client2.consumedEnergy = 300;
console.log('A tarifa é de: R$', client2.calculateBill().toFixed(2));
