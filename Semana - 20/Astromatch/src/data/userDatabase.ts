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
      returnedUser.age,
      returnedUser.photo,
      returnedUser.password
    );
  }

  public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.connection.raw(
      `UPDATE users SET password='${newPassword}' WHERE id="${id}";`
    );
  }

  public async getAllUsers(): Promise<User[]> {
    const query = this.connection.raw("SELECT * FROM users;");
    const usersFromDb = await query;
    return usersFromDb[0].map(
      (user: any) =>
        new User(
          user.id,
          user.name,
          user.email,
          this.getSQLDateFromTSDate(user.birthday),
          user.age,
          user.photo,
          user.password
        )
    );
  };

  public async getUserById(id: string): Promise<User> {
    const query = await this.connection.raw(
      `SELECT * FROM users WHERE id='${id}';`
    );
    const returnedUser = query[0][0];
    if (!returnedUser) {
      throw new Error("User not found");
    }
    return new User(
      returnedUser.id,
      returnedUser.name,
      returnedUser.email,
      returnedUser.photo,
      returnedUser.birthday,
      returnedUser.age,
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

  public async verifyMatchExists(
    userId: string,
    userToMatchId: string
  ): Promise<boolean> {
    const query = await this.connection.raw(
      `SELECT * FROM matches WHERE user_id = '${userId}' AND user_match_id = '${userToMatchId}' `
    );
    const returnedUser = query[0][0];
    return Boolean(returnedUser);
  }

  public async createMatch(
    userId: string,
    userToMatchId: string
  ): Promise<void> {
    await this.connection("matches").insert({
      user_id: userId,
      user_match_id: userToMatchId,
      match_relation: true
    });
  }

  public async createUnmatch(
    userId: string,
    userToMatchId: string
  ): Promise<void> {
    await this.connection("matches").insert({
      user_id: userId,
      user_match_id: userToMatchId,
      match_relation: false
    });
  }

  getSQLDateFromTSDate = (date: Date): any => date.toISOString().split("T")[0];

  public async getAllMatches(userId: string): Promise<User[]> {
    const query = this.connection.raw(
      `SELECT * FROM matches m
      JOIN users ON user_match_id=users.id 
      WHERE user_id = "${userId}"
      AND match_relation = 1;`
    );

    const usersFromDb = await query;
    console.log(usersFromDb)
    return usersFromDb[0].map(
      (user: any) =>
        new User(
          user.id,
          user.name,
          user.email,
          this.getSQLDateFromTSDate(user.birthday),
          user.age,
          user.photo,
          user.password
        )
    );
  }
}
