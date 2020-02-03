import { GetAllVideosGateway } from "../../gateways/videos/videoGateway";
export class GetAllVideosUC {
  constructor(private getAllVideosGateway: GetAllVideosGateway) {}

  async execute(): Promise<GetAllVideosOutput> {
    const videos = await this.getAllVideosGateway.getAllvideos();
    return {
      videos: videos.map(video => ({
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
  title: string;
  description: string;
  url: string;
  userId: string;
}
