import express, { Request, Response } from 'express'
import { SignupUC } from '../business/usecases/user/signup'
import { UserDataBase } from '../data/userDatabase'
import { BcryptService } from '../services/cryptography/bcrypt'
import { V4IdGenerator } from '../services/auth/v4IdGenerator'
import { JwtAuthService } from '../services/auth/jwtAuthentication'
import { LoginUC } from '../business/usecases/user/login'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const signup = new SignupUC(
            new UserDataBase(),
            new JwtAuthService(),
            new BcryptService(),
            new V4IdGenerator(),
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
        })
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
        })
    }
})






export default app