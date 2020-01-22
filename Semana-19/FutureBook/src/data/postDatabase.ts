import knex = require("knex");
import { Post } from "../business/entities/Post";


export class PostDataBase {
    protected connection = knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        user: "caio",
        password: process.env.DB_TOKEN,
        database: "caio",
        }
    });

    getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]

    async createPost(post: Post): Promise<void> {
        console.log(post)
        await this.connection('post').insert(post)
    }

}