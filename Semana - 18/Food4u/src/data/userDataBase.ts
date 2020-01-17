import { UserGateway } from "../business/gateways/User/userGateway";
import knex from 'knex';
import { User } from "../business/entities/User";


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

  async login(email: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM user_4food WHERE email='${email}';`
    );
    const returnedUser = query[0][0];
    if(!returnedUser){
      throw new Error("User not found")
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.age,
      returnedUser.password_user
    )
  }

  async verifyUserExists(id: string): Promise<boolean>{
    const query = await this.connection.raw(
      `SELECT * FROM user_4food WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
      return Boolean(returnedUser);
  }

}