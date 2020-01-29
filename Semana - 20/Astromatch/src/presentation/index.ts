import express, { Request, Response } from "express";
import { SignupUC } from "../business/usecases/user/signup";
import { UserDataBase } from "../data/userDatabase";
import { V4IdGenerator } from "../services/auth/v4IdGenerator";
import { BcryptService } from "../services/cryptography/bcrypt";
import { JwtAuthService } from "../services/auth/jwtAuthentication";
import { LoginUC } from "../business/usecases/user/login";
import { ChangeUserPasswordUC } from "../business/usecases/user/changePassword";
import { GetAllUsersUC } from "../business/usecases/user/getAllUsers";
import { MatchesUC, MatchUserInput } from "../business/usecases/user/matches";
import {
  UnmatchUserUC,
  UnmatchUserInput
} from "../business/usecases/user/unmatch";
import {
  GetAllMatches,
  GetAllMatchesInput
} from "../business/usecases/user/getAllMatches";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export default app;

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const signup = new SignupUC(
      new UserDataBase(),
      new JwtAuthService(),
      new BcryptService(),
      new V4IdGenerator()
    );

    const result = await signup.execute({
      name: req.body.name,
      email: req.body.email,
      birthday: req.body.birthday,
      age: req.body.age,
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
    res.status(404).send({
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
      new UserDataBase(),
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

app.post("/users/match", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const follow = new MatchesUC(
      new UserDataBase(),
      new UserDataBase(),
      new UserDataBase()
    );

    const input: MatchUserInput = {
      userToMatch: req.body.userToMatchId,
      userId: userId
    };
    const result = await follow.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/users/unmatch", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const unfollow = new UnmatchUserUC(new UserDataBase());

    const input: UnmatchUserInput = {
      userId: userId,
      userToUnmatch: req.body.userToUnmatch
    };
    const result = await unfollow.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.get("/getAllUsers", async (req: Request, res: Response) => {
  try {
    const getAllUsersUC = new GetAllUsersUC(new UserDataBase());
    const result = await getAllUsersUC.execute();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/getAllMatchs", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const input: GetAllMatchesInput = {
      userId
    };
    const getAllMatchesUC = new GetAllMatches(new UserDataBase());
    const result = await getAllMatchesUC.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});
