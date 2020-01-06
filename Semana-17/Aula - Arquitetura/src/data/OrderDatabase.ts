import { Order } from './../business/entities/Order';
import knex from 'knex';

class OrderModel {
  constructor(
    public photo: string,
    public size: string,
    public paper: string,
    public borderType: string,
    public borderSize: string,
    public borderColor: string
  ) {}
}

class OrderEntityMapper {
  entityToModel(entity: Order): OrderModel {
    return {
      photo: entity.getPhoto(),
      size: entity.getSize(),
      paper: entity.getPaper(),
      borderType: entity.getBorderType(),
      borderSize: entity.getBorderSize(),
      borderColor: entity.getBorderColor()
    };
  }

  modelToENtity(model: OrderModel): Order {
    return new Order(
      model.photo,
      model.size,
      model.paper,
      model.borderType,
      model.borderSize,
      model.borderColor
    );
  }
}

export class OrderDatabase {
  private connection: knex;
  private orderEntityMapper: OrderEntityMapper;

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'caio',
        password: process.env.SENHA_BANCO,
        database: 'caio'
      }
    });

    this.orderEntityMapper = new OrderEntityMapper();
  }

  async createOrder(order: Order) {
    await this.connection('orders').insert(
      this.orderEntityMapper.entityToModel(order)
    );
  }
}
