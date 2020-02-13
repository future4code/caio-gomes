import { GetAllVideosGateway } from "../../gateways/videos/videoGateway";
export class GetAllVideosUC {
  constructor(private getAllVideosGateway: GetAllVideosGateway) {}

  async execute(): Promise<VideoOfGetAllVideosOutput> {
    const responses = await this.getAllVideosGateway.getAllVideos();
    return {
      videos: responses.map(response => ({
        title: response.video.getTitle(),
        description: response.video.getDescription(),
        url: response.video.getUrl(),
        userId: response.video.getUserId(),
        firstName: response.firstName,
        lastName: response.lastName,
        photo: response.photo
      }))
    };
  }
}

interface VideoOfGetAllVideosOutput {
  videos: Array<{
    title: string;
    description: string;
    url: string;
    firstName: string;
    lastName: string;
    photo: string;
  }>;
}
