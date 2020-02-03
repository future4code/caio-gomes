import { Video } from "./../../entities/Video";

export interface UploaderVideoGateway {
  uploadVideo(video: Video): Promise<void>;
}

export interface GetAllVideosGateway {
  getAllvideos(): Promise<Video[]>;
}

export interface GetUserVideosGateway {
  getUserVideos(userId: string): Promise<Video[]>;
}

export interface DeleteVideoGateway {
  deleteVideo(videoId: string): Promise<void>;
}

export interface EditVideoInformationGateway {
  editVideoInformation(
    videoId: string,
    newTitle: string,
    newDescription: string
  ): Promise<void>;
}
