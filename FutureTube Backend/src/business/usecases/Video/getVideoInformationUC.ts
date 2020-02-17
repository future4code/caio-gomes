import { GetVideoByIdGateway } from "../../gateways/videos/videoGateway";

export class GetVideoInformationUC {
  constructor(private getVideoByIdGateway: GetVideoByIdGateway) {}

  async execute(input: VideoInformationInput): Promise<VideoInformationOutput> {
    const responses = await this.getVideoByIdGateway.getVideoById(
      input.videoId
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

export interface VideoInformationInput {
  videoId: string;
}

interface VideoInformationOutput {
  videos: Array<{
    title: string;
    description: string;
    url: string;
    firstName: string;
    lastName: string;
    photo: string;
  }>;
}
