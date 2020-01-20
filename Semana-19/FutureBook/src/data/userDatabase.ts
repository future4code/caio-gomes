import knex from 'knex';
import { User } from '../business/entities/User';

export class UserDataBase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      user: "caio",
      password: "6ac0e893475514c1449c7bf672657293",
      database: "caio"
    }
  });


  public async signup(user: User): Promise<string> {
    return await this.connection('users').insert(user)
  }

  public async login(email: string): Promise<User> {
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