import knex = require("knex");
import { FeedGateway } from "../business/gateways/FeedGateway";
import { Post } from "../business/entities/Post";

interface PostFeedModel {
    postId: number
    photo: string
    description: string
    date: string
    type: string
    userId: string
    userName: string
}

export class FeedDataBase implements FeedGateway {
    protected connection = knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        user: "caio",
        password: process.env.DB_TOKEN,
        database: "caio",
        }
    });

    async getPostsForUser(userId: string) {
        const result = await this.connection.raw(`SELECT * FROM feed WHERE userId="${userId}"`)
        const postsDB: PostFeedModel[] = result[0]

        return postsDB.map(post => ({
            post: new Post(post.photo, post.description, new Date(post.date), post.type,)
        }))

    }

}