import { RegisterUserGateway } from "../business/gateways/RegisterGateway";
import knex from 'knex';
import { User } from '../business/entities/User';

export class RegisterUserDataBase implements RegisterUserGateway {
    private connection : knex

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
              host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
              user: 'caio',
              password: '6ac0e893475514c1449c7bf672657293',
              database: 'caio'
            }
        });
}
	
	public async createUser(user: User): Promise<void> {
	   await this.connection('user_4food').insert(user)
  }
}