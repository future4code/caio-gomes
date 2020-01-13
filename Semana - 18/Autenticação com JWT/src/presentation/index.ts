import { JwtImplementation } from './../services/jwt/jwtimplementantion';
import { LoginUC } from './../business/usecases/Auth/login';
import { RegisterUserUC } from './../business/usecases/User/RegisterUser';
import { UserDataBase } from './../data/RegisterDataBase';
import express, {Request, Response} from 'express'
import { BcryptImplemantation } from '../services/crypt/bcryptImplematation';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response) => {
    console.log()
    try{
        const registerUser = new RegisterUserUC(
            new UserDataBase(),
            new BcryptImplemantation()
        )
        const result = await registerUser.execute({
            email: req.body.email,
            password_user: req.body.password
        }) 
        
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            errorMessage: err.message
        })
    }
});

app.post('/login', async (req: Request, res:Response) => {
    try{
        const loginUC = new LoginUC(
            new UserDataBase(),
            new BcryptImplemantation(),
            new JwtImplementation()
        )
        const result = await loginUC.execute(
            req.body.email,
            req.body.password
        )
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            errorMessage: err.message
        })
    }
})

export default app