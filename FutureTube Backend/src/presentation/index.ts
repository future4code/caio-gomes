import express, { Request, Response } from "express";
import { SignupUC } from "../business/usecases/User/signup";
import { UserDataBase } from "../data/User/userDatabase";
import { JwtAuthService } from "../services/Auth/jwtAuthentication";
import { BcryptService } from "../services/Cryptography/bcrypt";
import { V4IdGenerator } from "../services/Auth/v4IdGenerator";
import { LoginUC } from "../business/usecases/User/login";
import { ChangeUserPasswordUC } from "../business/usecases/User/changePassword";

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
