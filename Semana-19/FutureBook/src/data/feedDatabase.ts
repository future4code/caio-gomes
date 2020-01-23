import knex = require("knex");
import { Post, PostType } from "../business/entities/Post";

interface PostFeedModel {
    id: number
    photo: string
    description: string
    date: string
    type: PostType
    userId: string
    userName: string
}

export class FeedDataBase {
    protected connection = knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        user: "caio",
        password: process.env.DB_TOKEN,
        database: "caio",
        }
    });

    async getPostsForUser(userId: string){
       const result = await this.connection.raw(`SELECT p.id, p.photo, p.description, p.type, u.name as userName FROM followers f
        JOIN posts p ON f.followed_id=p.user_id
        JOIN users u ON f.followed_id=u.id 
        WHERE follower_id="${userId}";`)

        const postsFromDB: PostFeedModel[] = result[0]
        return postsFromDB.map(post => ({
            post: new Post(post.id, post.photo, post.description, new Date(post.date), post.type, post.userId),
            userName: post.userName
        }))
    }
}