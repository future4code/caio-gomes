import knex from 'knex';
import { User } from '../business/entities/User';

export class UserDataBase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      user: "caio",
      password: process.env.DB_TOKEN,
      database: "caio",
      debug: true
    }
  });


  public async createUser(user: User): Promise<string> {
    return await this.connection('users').insert(user)
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection('users').select('*').where('email', email);
    console.log(query)
    const returnedUser = query[0];
    if (!returnedUser) {
      throw new Error("User not found!");
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.password
    );
  }
}