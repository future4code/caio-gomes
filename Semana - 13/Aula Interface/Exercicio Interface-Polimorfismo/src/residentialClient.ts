import { Client } from './client';
import { Residence } from './residence';
class ResidentialClient extends Residence implements Client {
  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  calculateBill(kwh: number): number {
    return 0.75 * 5;
  }
}

const client1 = new ResidentialClient('Caio', 111, 5);
client1.calculateBill(5);
const client2 = new ResidentialClient('Brian', 1112, 15);
console.log(client2);
