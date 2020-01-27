import express, {Request, Response} from 'express'
import { SignupUC } from '../business/usecases/user/signup';
import { UserDataBase } from '../data/userDatabase';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { BcryptService } from '../services/cryptography/bcrypt';
import { JwtAuthService } from '../services/auth/jwtAuthentication';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

export default app

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