import { Paper } from '../../entities/Paper';
import { Frame } from '../../entities/Frame';
import { Order } from '../../entities/Order';
import { Client } from '../../entities/Client';
import { OrderDB } from '../../../data/OrderDB';
import { v4 } from 'uuid';

function generateId() {
  return v4();
}

export class CreateOrderUseCase {
  private orderDataBase: OrderDB;

  constructor() {
    this.orderDataBase = new OrderDB();
  }

  async execute(input: CreateOrderInput) {
    const paper = new Paper(input.paper.size, input.paper.type);
    const frame = new Frame(input.frame.size, input.frame.type);
    const client = new Client(input.client.name, input.client.email);

    const order = new Order(paper, frame, client, generateId());

    await this.orderDataBase.saveOrder(order);

    return {
      paperPrice: order.calculatePaperPrice(),
      paperFrame: order.calculateFramePrice(),
      total: order.calculateTotalPrice()
    };
  }
}

interface CreateOrderInput {
  paper: {
    size: string;
    type: string;
  };
  frame: {
    size: string;
    type: string;
  };
  client: {
    name: string;
    email: string;
  };
}
