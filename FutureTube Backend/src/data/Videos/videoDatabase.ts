import knex = require("knex");
import { Video } from "./../../business/entities/Video";

export class PostDataBase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-208-115-17.compute-1.amazonaws.com",
      user: "caio",
      password: process.env.DB_TOKEN,
      database: "futuretube"
    }
  });

  getSQLDateFromTSDate = (date: Date): string =>
    date.toISOString().split("T")[0];

  public async uploadVideo(video: Video): Promise<string> {
    return await this.connection("videos").insert(video);
  }

  public async getAllVideos(): Promise<Video[]> {
    const query = this.connection.raw("SELECT * FROM videos;");
    const videosFromDb = await query;
    return videosFromDb[0].map(
      (video: any) =>
        new Video(
          video.id,
          video.title,
          video.description,
          video.url,
          video.userId
        )
    );
  }

  public async deleteVideo(userId: string, videoId: string): Promise<void> {
    await this.connection.raw(
      `DELETE FROM user_videos
      WHERE user_id = "${userId}" AND followed_id = "${videoId}" ;`
    );
  }
}