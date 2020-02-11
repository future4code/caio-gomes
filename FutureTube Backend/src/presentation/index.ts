import {
  GetVideoInformationUC,
  VideoInformationInput
} from "./../business/usecases/Video/getVideoInformationUC";
import { EditVideoInformationInput } from "./../business/usecases/Video/editVideoInformation";
import {
  DeleteVideoUC,
  DeleteVideoInput
} from "./../business/usecases/Video/deleteVideoUC";
import { GetAllVideosUC } from "./../business/usecases/Video/getAllVideosUC";
import { VideoDataBase } from "./../data/Videos/videoDatabase";
import {
  UploadVideoUC,
  UploadVideoInput
} from "./../business/usecases/Video/uploadVideoUC";
import express, { Request, Response } from "express";
import { SignupUC } from "../business/usecases/User/signup";
import { UserDataBase } from "../data/User/userDatabase";
import { JwtAuthService } from "../services/Auth/jwtAuthentication";
import { BcryptService } from "../services/Cryptography/bcrypt";
import { V4IdGenerator } from "../services/Auth/v4IdGenerator";
import { LoginUC } from "../business/usecases/User/login";
import { ChangeUserPasswordUC } from "../business/usecases/User/changePassword";
import { EditVideoInformationUC } from "../business/usecases/Video/editVideoInformation";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export default app;

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

app.post("/createUser", async (req: Request, res: Response) => {
  try {
    const signup = new SignupUC(
      new UserDataBase(),
      new JwtAuthService(),
      new BcryptService(),
      new V4IdGenerator()
    );

    const result = await signup.execute({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      photo: req.body.photo,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const login = new LoginUC(
      new UserDataBase(),
      new JwtAuthService(),
      new BcryptService()
    );

    const result = await login.execute(req.body.email, req.body.password);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/changePassword", async (req: Request, res: Response) => {
  try {
    const changePasswordUC = new ChangeUserPasswordUC(
      new JwtAuthService(),
      new UserDataBase(),
      new BcryptService(),
      new UserDataBase()
    );

    const result = await changePasswordUC.execute({
      token: getTokenFromHeaders(req.headers),
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.post("/uploadVideo", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const uploadVideo = new UploadVideoUC(
      new VideoDataBase(),
      new V4IdGenerator()
    );

    const input: UploadVideoInput = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      userId
    };
    const result = await uploadVideo.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/allVideos", async (req: Request, res: Response) => {
  try {
    const getAllVideos = new GetAllVideosUC(new VideoDataBase());
    const result = await getAllVideos.execute();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.delete("/video", async (req: Request, res: Response) => {
  try {
    const deleteVideo = new DeleteVideoUC(new VideoDataBase());

    const input: DeleteVideoInput = {
      videoId: req.body.videoId
    };

    const result = await deleteVideo.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.put("/edit/video", async (req: Request, res: Response) => {
  try {
    const editVideo = new EditVideoInformationUC(new VideoDataBase());

    const input: EditVideoInformationInput = {
      videoId: req.body.videoId,
      newTitle: req.body.newTitle,
      newDescription: req.body.newDescription
    };

    const result = await editVideo.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/video/information", async (req: Request, res: Response) => {
  try {
    const useCase = new GetVideoInformationUC(new VideoDataBase());

    const input: VideoInformationInput = {
      videoId: req.query.videoId
    };

    const result = await useCase.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});
