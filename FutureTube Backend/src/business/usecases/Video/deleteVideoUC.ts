import { DeleteVideoGateway } from "./../../gateways/videos/videoGateway";
export class DeleteVideoUC {
  constructor(private deleteVideoGateway: DeleteVideoGateway) {}

  async execute(input: DeleteVideoInput): Promise<DeleteVideoOutput> {
    await this.deleteVideoGateway.deleteVideo(input.videoId);
    return {
      message: "Video deleted successfully"
    };
  }
}

export interface DeleteVideoInput {
  videoId: string;
}

interface DeleteVideoOutput {
  message: string;
}
