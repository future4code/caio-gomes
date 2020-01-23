import express, { Request, Response } from "express";
import { SignupUC } from "../business/usecases/user/signup";
import { UserDataBase } from "../data/userDatabase";
import { BcryptService } from "../services/cryptography/bcrypt";
import { V4IdGenerator } from "../services/auth/v4IdGenerator";
import { JwtAuthService } from "../services/auth/jwtAuthentication";
import { LoginUC } from "../business/usecases/user/login";
import {
  FollowUserUC,
  FollowUserInput
} from "../business/usecases/user/follow";
import { UnfollowUserUC } from "../business/usecases/user/unfollow";
import { CreatePostUC, CreatePostInput } from "../business/usecases/post/post";
import { PostDataBase } from "../data/postDatabase";
import { GetAllUsersUC } from "../business/usecases/user/getAllUsers";
import { GetFeedUC, GetFeedInput } from "../business/usecases/feed/getFeed";
import { FeedDataBase } from "../data/feedDatabase";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

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

app.post("/users/follow", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const follow = new FollowUserUC(new UserDataBase(), new UserDataBase());

    const input: FollowUserInput = {
      followedId: userId,
      followerId: req.body.userToFollow
    };
    await follow.execute(input);
    res.status(200).send();
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/users/unfollow", async (req: Request, res: Response) => {
  console.log(req);
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const unfollow = new UnfollowUserUC(new UserDataBase());

    const input: FollowUserInput = {
      followedId: userId,
      followerId: req.body.userToUnfollow
    };
    await unfollow.execute(input);
    console.log(input);
    res.status(200).send();
  } catch (err) {
    res.status(404).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/createPost", async (req: Request, res: Response) => {
  try {
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(
      getTokenFromHeaders(req.headers)
    );

    const createPost = new CreatePostUC(new PostDataBase());

    const input: CreatePostInput = {
      photo: req.body.photo,
      description: req.body.description,
      date: new Date(),
      type: req.body.type,
      userId
    };
    await createPost.execute(input);
    res.status(200).send();
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

app.get("/feed", async (req: Request, res: Response) => {
  try{
    const authService = new JwtAuthService();
    const userId = authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
    
    const getFeedUC = new GetFeedUC(
      new FeedDataBase()
    )

    const input: GetFeedInput = {
      userId
    }

    const result = await getFeedUC.execute(input)
    res.status(200).send(result)
  }catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
})

export default app;
