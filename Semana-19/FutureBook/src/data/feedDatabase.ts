import knex = require("knex");
import { Post, PostType } from "../business/entities/Post";
import {
  GetFeedGateway,
  GetPaginatedFeedByTypeGateway
} from "../business/gateways/FeedGateway";

interface PostFeedModel {
  id: number;
  photo: string;
  description: string;
  date: Date;
  type: PostType;
  userId: string;
  userName: string;
}

export class FeedDataBase
  implements GetFeedGateway, GetPaginatedFeedByTypeGateway {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      user: "caio",
      password: process.env.DB_TOKEN,
      database: "caio"
    }
  });

  getSQLDateFromTSDate = (date: Date): any => date.toISOString().split("T")[0];

  async getFeedForUser(userId: string, limit: number, offset: number) {
    const result = await this.connection
      .raw(`SELECT p.id, p.photo, p.description, p.type, p.date, u.name as userName FROM followers f
        JOIN posts p ON f.followed_id=p.user_id
        JOIN users u ON f.followed_id=u.id 
        WHERE follower_id="${userId}"
        ORDER BY date DESC
        LIMIT ${limit}
        OFFSET ${offset}`);

    const postsFromDB: PostFeedModel[] = result[0];

    return postsFromDB.map(post => ({
      post: new Post(
        post.photo,
        post.description,
        this.getSQLDateFromTSDate(post.date),
        post.type,
        post.userId
      ),
      userName: post.userName
    }));
  }

  async getPaginatedFeedByType(type: string, limit: number, offset: number) {
    const result = await this.connection.raw(
      `SELECT * FROM posts p 
            JOIN users u ON p.user_id = u.id 
            WHERE type="${type}" 
            ORDER BY date
            LIMIT ${limit}
            OFFSET ${offset}`
    );
    const postsFromDB: PostFeedModel[] = result[0];
    return postsFromDB.map(post => ({
      post: new Post(
        post.photo,
        post.description,
        post.date,
        post.type,
        post.userId
      ),
      userName: post.userName
    }));
  }
}
