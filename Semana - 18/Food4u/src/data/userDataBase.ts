import { User } from '../business/entities/User';
import { UserGateway } from "../business/gateways/User/userGateway";
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
	
	async signup(user: User): Promise<void> {
	   await this.connection('user_4food').insert(user)
  }

 async login(email: string): Promise<any> {
  return await this.connection('user_4food').where('email', email)
 }

 async profile(token: string): Promise<void> {
   await this.connection.select('*').from('user_4food').where('password_user', token)
 }
}