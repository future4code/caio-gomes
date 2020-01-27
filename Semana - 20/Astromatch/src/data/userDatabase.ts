import knex from "knex";
import { User } from "../business/entities/User";

export class UserDataBase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "34.235.170.75",
      user: "caio",
      password: process.env.DB_TOKEN,
      database: "astromatch"
    }
  });

  public async createUser(user: User): Promise<string> {
    return await this.connection("users").insert(user);
  }

  public async getUserByEmail(email: string): Promise<User> {
    const query = await this.connection("users")
      .select("*")
      .where("email", email);

    const returnedUser = query[0];
    if (!returnedUser) {
      throw new Error("User not found!");
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.birthday,
      returnedUser.photo,
      returnedUser.password
    );
  };

  public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.connection.raw(
      `UPDATE Users SET password='${newPassword}' WHERE id=${id};`
    );
  };

  public async getAllUsers(): Promise<User[]> {
    const query = this.connection.raw("SELECT * FROM users;");
    const usersFromDb = await query;
    return usersFromDb[0].map(
      (user: any) =>
        new User(user.id, user.name, user.email, user.birthday, user.photo, user.password)
    );
  }

}

