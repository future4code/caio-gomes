import { User } from './../business/entities/User';
import { UserGateway } from "../business/gateways/User/UserGateway";
import knex from 'knex';


export class UserDataBase implements UserGateway {
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
	
	async createUser(user: User): Promise<void> {
	   await this.connection('user_4food').insert(user)
  }

 async getUserByEmail(email: string): Promise<any> {
  return await this.connection('user_4food').where('email', email)
 }

}