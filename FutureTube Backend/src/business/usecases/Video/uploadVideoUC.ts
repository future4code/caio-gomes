import { UploaderVideoGateway } from "./../../gateways/videos/videoGateway";
import { Video } from "../../entities/Video";
import { IdGeneratorGateway } from "../../gateways/auth/idGenerator";
export class UploadVideoUC {
  constructor(
    private uploadVideoGateway: UploaderVideoGateway,
    private idGenerator: IdGeneratorGateway
    ) {}

  public async execute(input: UploadVideoInput): Promise<UploadVideoOutput> {
    const newVideo = new Video(
      this.idGenerator.generateId(),
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
