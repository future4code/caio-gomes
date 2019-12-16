import { Client } from './client';
import { Trade } from './trade';

class CommercialClient extends Trade implements Client{
  clientName: string;
  clientNumber: number;
  consumedEnergy: number;

  calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

const client1 = new CommercialClient('Padaria Bons Sonhos', '88.656.652/0002-96', '0058-693');
client1.clientName = 'Padaria Bons Sonhos';
client1.clientNumber = 3;
client1.consumedEnergy = 1200;
console.log('A tarifa é de: R$', client1.calculateBill().toFixed(2));

const client2 = new CommercialClient('Marcenaria 3 Dedos', '75.326.652/0052-36', '0123-563');
client2.clientName = 'Marcenaria 3 Dedos';
client2.clientNumber = 4;
client2.consumedEnergy = 1800;
console.log('A tarifa é de: R$', client2.calculateBill().toFixed(2));