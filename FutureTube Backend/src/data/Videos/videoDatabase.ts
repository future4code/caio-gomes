import knex = require("knex");
import { Video } from "./../../business/entities/Video";

interface VideoInformationModel {
  title: string;
  description: string;
  url: string;
  userName: string;
  photo: string;
}

export class VideoDataBase {
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

  public async uploadVideo(video: Video): Promise<void> {
    await this.connection.raw(`
      INSERT INTO videos (id, title, description, user_id, url)
      VALUES ("${video.getVideoId()}",
      "${video.getTitle()}",
      "${video.getDescription()}",
      "${video.getUserId()}",
      "${video.getUrl()}"
      )
    `);
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

  public async deleteVideo(videoId: string): Promise<void> {
    await this.connection.raw(`DELETE FROM videos WHERE id = "${videoId}"`);
  }

  public async editVideoInformation(
    videoId: string,
    newTitle: string,
    newDescription: string
  ): Promise<void> {
    await this.connection.raw(`
    UPDATE videos
    SET title = "${newTitle}", description = "${newDescription}"
    WHERE id = "${videoId}";
    `);
  }

  public async getVideoById(videoId: string) {
    const result = await this.connection.raw(`
    SELECT * FROM videos
    JOIN users ON user_id = users.id 
    WHERE videos.id = "${videoId}";
    `);

    const videoFromDb = result[0];

    return videoFromDb.map((video: any) => ({
      video: new Video(
        videoId,
        video.title,
        video.description,
        video.url,
        video.userId
      ),
      firstName: video.firstName,
      lastName: video.lastName,
      photo: video.photo
    }));
  }
}
