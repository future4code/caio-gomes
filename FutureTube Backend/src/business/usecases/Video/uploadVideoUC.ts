import { UploaderVideoGateway } from "./../../gateways/videos/videoGateway";
import { Video } from "../../entities/Video";
export class UploadVideoUC {
  constructor(private uploadVideoGateway: UploaderVideoGateway) {}

  public async execute(input: UploadVideoInput): Promise<UploadVideoOutput> {
    const newVideo = new Video(
      input.title,
      input.description,
      input.url,
      input.userId
    );
    await this.uploadVideoGateway.uploadVideo(newVideo);

    return {
      message: "Video uploaded successfully!"
    };
  }
}

export interface UploadVideoInput {
  title: string;
  description: string;
  url: string;
  userId: string;
}

interface UploadVideoOutput {
  message: string;
}
