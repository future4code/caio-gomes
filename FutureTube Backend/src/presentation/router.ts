import { ChangeUserPasswordUC } from "./../business/usecases/User/changePassword";
import { LoginUC } from "./../business/usecases/User/login";
import { SignupUC } from "../business/usecases/User/signup";
import { UserDataBase } from "../data/User/userDatabase";
import { JwtAuthService } from "../services/Auth/jwtAuthentication";
import { BcryptService } from "../services/Cryptography/bcrypt";
import { V4IdGenerator } from "../services/Auth/v4IdGenerator";
import {
  UploadVideoUC,
  UploadVideoInput
} from "../business/usecases/Video/uploadVideoUC";
import { VideoDataBase } from "../data/Videos/videoDatabase";
import { GetAllVideosUC } from "../business/usecases/Video/getAllVideosUC";
import {
  DeleteVideoUC,
  DeleteVideoInput
} from "../business/usecases/Video/deleteVideoUC";
import {
  EditVideoInformationUC,
  EditVideoInformationInput
} from "../business/usecases/Video/editVideoInformation";
import {
  GetVideoInformationUC,
  VideoInformationInput
} from "../business/usecases/Video/getVideoInformationUC";

export class ApiRouter {
  public static getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
  };

  public static async handleRoute(path: string, event: any): Promise<any> {
    switch (path) {
      case "createUser":
        const signup = new SignupUC(
          new UserDataBase(),
          new JwtAuthService(),
          new BcryptService(),
          new V4IdGenerator()
        );

        const {
          firstName,
          lastName,
          email,
          birthday,
          photo,
          password
        } = event.body;

        const resultSignup = await signup.execute({
          firstName,
          lastName,
          email,
          birthday,
          photo,
          password
        });

        return resultSignup;

      case "login":
        const loginUC = new LoginUC(
          new UserDataBase(),
          new JwtAuthService(),
          new BcryptService()
        );

        const resultLogin = await loginUC.execute(
          event.body.email,
          event.body.password
        );

        return resultLogin;

      case "changePassword":
        const changePasswordUC = new ChangeUserPasswordUC(
          new JwtAuthService(),
          new UserDataBase(),
          new BcryptService(),
          new UserDataBase()
        );

        const resultChangePassword = await changePasswordUC.execute({
          token: this.getTokenFromHeaders(event.headers),
          oldPassword: event.body.oldPassword,
          newPassword: event.body.newPassword
        });

        return resultChangePassword;

      case "uploadVideo":
        const authService = new JwtAuthService();
        const userId = authService.getUserIdFromToken(
          this.getTokenFromHeaders(event.headers)
        );

        const uploadVideo = new UploadVideoUC(
          new VideoDataBase(),
          new V4IdGenerator()
        );

        const input: UploadVideoInput = {
          title: event.body.title,
          description: event.body.description,
          url: event.body.url,
          userId
        };
        const resultUploadVideo = await uploadVideo.execute(input);
        return resultUploadVideo;

      case "allVideos":
        const getAllVideos = new GetAllVideosUC(new VideoDataBase());
        const resultGetAllVideos = await getAllVideos.execute();
        return resultGetAllVideos;

      case "deleteVideo":
        const deleteVideo = new DeleteVideoUC(new VideoDataBase());

        const inputDeleteVideo: DeleteVideoInput = {
          videoId: event.body.videoId
        };

        const resultDeleteVideo = await deleteVideo.execute(inputDeleteVideo);
        return resultDeleteVideo;

      case "edit/video":
        const editVideo = new EditVideoInformationUC(new VideoDataBase());

        const inputEditVideo: EditVideoInformationInput = {
          videoId: event.body.videoId,
          newTitle: event.body.newTitle,
          newDescription: event.body.newDescription
        };

        const resultEditVideo = await editVideo.execute(inputEditVideo);
        return resultEditVideo;

      case "video/information":
        const useCase = new GetVideoInformationUC(new VideoDataBase());

        const inputVideoInformation: VideoInformationInput = {
          videoId: event.query.videoId
        };

        const resultVideoInformation = await useCase.execute(
          inputVideoInformation
        );
        return resultVideoInformation;
      default:
        throw new Error("Rota não existe");
    }
  }
}
