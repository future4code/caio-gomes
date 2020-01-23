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

  public async createFollow(followerId: string, followedId: string): Promise<void> {
   await this.connection('followers').insert({ 'follower_id': followerId, 'followed_id': followedId })
  };

  public async createUnfollow(followerId: string, followedId: string): Promise<void>{
   await this.connection.raw(
      `DELETE FROM followers 
      WHERE follower_id = "${followerId}" AND followed_id = "${followedId}" ;`
    )
  }

  public async verifyUserExists(id: string): Promise<boolean> {
    const query = await this.connection.raw(
      `SELECT * FROM users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
    return Boolean(returnedUser);
  }

  public async getAllUsers(): Promise<User[]> {
    const query = this.connection.raw("SELECT * FROM users;");
    const usersFromDb = await query;
    return usersFromDb[0].map(
      (user: any) =>
        new User(user.id, user.name, user.email, user.password)
    );
  }
}