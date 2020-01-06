import { OrderDatabase } from './../../../data/OrderDatabase';
import { Order } from './../../entities/Order';

export class CreateOrderInteractor {
  private orderDatabase = OrderDatabase;

  constructor() {
    this.orderDatabase = new OrderDatabase();
  }

  async execute(createOrderInput: CreateOrderInput) {
    const newOrder = new Order(
      createOrderInput.photo,
      createOrderInput.size,
      createOrderInput.paper,
      createOrderInput.borderType,
      createOrderInput.borderSize,
      createOrderInput.borderColor
    );

    await this.orderDatabase.createOrder(newOrder)
  }
}

export interface CreateOrderInput {
  photo: string;
  size: string;
  paper: string;
  borderType: string;
  borderSize: string;
  borderColor: string;
}
