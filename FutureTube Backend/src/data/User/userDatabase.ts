import { User } from "./../../business/entities/User";
import knex from "knex";

export class UserDataBase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-208-115-17.compute-1.amazonaws.com",
      user: "caio",
      password: process.env.DB_TOKEN,
      database: "futuretube"
    }
  });

  getSQLDateFromTSDate = (date: Date): any => date.toISOString().split("T")[0];

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
      returnedUser.firstName,
      returnedUser.lastName,
      returnedUser.email,
      returnedUser.birthday,
      returnedUser.password,
      returnedUser.photo
    );
  }

  public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.connection.raw(
      `UPDATE users SET password='${newPassword}' WHERE id="${id}";`
    );
  }

  public async getUserById(id: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];

    if (!returnedUser) {
      throw new Error("User not found!!!");
    }
    return new User(
      returnedUser.id,
      returnedUser.firstName,
      returnedUser.lastName,
      returnedUser.email,
      returnedUser.photo,
      returnedUser.birthday,
      returnedUser.password
    );
  }

  public async verifyUserExists(id: string): Promise<boolean> {
    const query = await this.connection.raw(
      `SELECT * FROM users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
    return Boolean(returnedUser);
  }
}
