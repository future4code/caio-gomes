import { GetUserVideosGateway } from "./../../gateways/videos/videoGateway";

export class GetUserVideosUC {
  constructor(private getUserVideosGateway: GetUserVideosGateway) {}

  async execute(input: GetUserVideosInput): Promise<GetUserVideoOutput> {
    const responses = await this.getUserVideosGateway.getUserVideos(
      input.userIdVideo
    );
    return {
        videos: responses.map(response => ({
          title: response.video.getTitle(),
          description: response.video.getDescription(),
          url: response.video.getUrl(),
          firstName: response.firstName,
          lastName: response.lastName,
          photo: response.photo
        }))
      };
  }
}

export interface GetUserVideosInput {
  userIdVideo: string;
}

interface GetUserVideoOutput {
  videos: Array<{
    title: string;
    description: string;
    url: string;
    firstName: string;
    lastName: string;
    photo: string;
  }>;
}
