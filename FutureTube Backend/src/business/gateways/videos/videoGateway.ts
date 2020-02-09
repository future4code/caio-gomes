import { Video } from "./../../entities/Video";

export interface UploaderVideoGateway {
  uploadVideo(video: Video): Promise<void>;
}

export interface GetAllVideosGateway {
  getAllVideos(): Promise<Video[]>;
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

export interface GetVideoByIdGateway {
  getVideoById(videoId: string): Promise<VideoResponse[]>
}

export interface VideoResponse {
  video: Video
  firstName: string
  lastName: string
  photo: string
}