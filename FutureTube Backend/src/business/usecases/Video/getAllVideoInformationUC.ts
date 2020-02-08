/*import { User } from './../../entities/User';

import { GetVideoByIdGateway } from './../../gateways/videos/videoGateway';

export class GetAllVideoInformtaionUC {
  constructor(
   private getVideoById : GetVideoByIdGateway
  ) {}

  async execute(input: GetVideoByIdInput): Promise<GetAllVideosOutput> {
    const videos = await this.getVideoById.getVideoById(input.videoId);
    return {
      videos: videos.map(video => ({
        title: video.getTitle(),
        description: video.getDescription(),
        url: video.getUrl(),
        user: 
      }))
    };
  }
}

export interface GetVideoByIdInput {
  videoId: string
}

export interface GetAllVideosOutput {
  videos: VideoOfGetAllVideosOutput[];
}

interface VideoOfGetAllVideosOutput {
  title: string;
  description: string;
  url: string;
  user: User
}*/
