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
}