import { Video } from './../../entities/Video';

export interface UploaderVideoGateway {
  uploadVideo(video: Video): Promise<void>;
}
