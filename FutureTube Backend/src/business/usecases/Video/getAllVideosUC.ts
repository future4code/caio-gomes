import { GetAllVideosGateway } from "../../gateways/videos/videoGateway";
export class GetAllVideosUC {
  constructor(private getAllVideosGateway: GetAllVideosGateway) {}

  async execute(): Promise<GetAllVideosOutput> {
    const videos = await this.getAllVideosGateway.getAllVideos();
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

export interface GetAllVideosOutput {
  videos: VideoOfGetAllVideosOutput[];
}

interface VideoOfGetAllVideosOutput {
  videoId: string;
  title: string;
  description: string;
  url: string;
  userId: string;
}
