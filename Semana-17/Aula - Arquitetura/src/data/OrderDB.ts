import knex from 'knex'
import {Order} from '../business/entities/Order'

interface OrderModel {
  id: string
  clientName: string
  email: string
  paperSize: string
  paperType: string
  frameSize: string
  frameType: string
}

export class OrderDB {
  private connection: knex

  constructor() {
    this.connection = knex({
      client: 'mysql',
      connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'caio',
        password: process.env.SENHA_BANCO,
        database: 'caio'
      }
    })

  }

  async saveOrder(order: Order): Promise<void> {
    const databaseModel: OrderModel = {
      id: order.getId(),
      clientName: order,
      email: order,
      paperSize: order,
      paperType: order,
      frameSize: order,
      frameType: order,
    }
  }
}
