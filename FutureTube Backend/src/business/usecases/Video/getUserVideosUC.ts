import { GetUserVideosGateway } from "./../../gateways/videos/videoGateway";
import { GetAllVideosOutput } from "./getAllVideosUC";
export class GetUserVideosUC {
  constructor(private getUserVideosGateway: GetUserVideosGateway) {}

  async execute(input: GetUserVideosInput): Promise<GetAllVideosOutput> {
    const videos = await this.getUserVideosGateway.getUserVideos(input.userId);
    return {
      videos: videos.map(video => ({
        videoId: video.getVideoId(),
        title: video.getTitle(),
        description: video.getDescription(),
        url: video.getUrl(),
        userId: video.getUserId()
      }))
    };
  }
}

export interface GetUserVideosInput {
  userId: string;
}
