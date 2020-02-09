import { GetVideoByIdGateway } from "../../gateways/videos/videoGateway";
import { response } from "express";

export class GetVideoInformationUC {
  constructor(private getVideoByIdGateway: GetVideoByIdGateway) {}

  async execute(input: VideoInformationInput): Promise<VideoInformationOutput> {
    const responses = await this.getVideoByIdGateway.getVideoById(input.videoId);
    console.log(responses)
    return {
      videos: responses.map((response) => ({
        title: response.video.getTitle(),
        description: response.video.getDescription(),
        url: response.video.getUrl(),
        fisrtName: response.firstName,
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
