import { JwtImplementation } from './../services/jwt/jwtimplementantion';
import { LoginUC } from './../business/usecases/Auth/login';
import { RegisterUserUC } from '../business/usecases/User/registerUser';
import { UserDataBase } from '../data/userDataBase';
import express, {Request, Response} from 'express'
import { BcryptImplemantation } from '../services/crypt/bcryptImplematation';
import { GetProfileUC } from '../business/usecases/User/getProfile';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return(headers['auth'] as string || '');
}

app.post('/signup', async (req: Request, res: Response) => {
    console.log()
    try{
        const registerUser = new RegisterUserUC(
            new UserDataBase(),
            new BcryptImplemantation()
        )
        const result = await registerUser.execute({
            name: req.body.name,
            age: req.body.age,
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

app.get('/getProfile', async (req: Request, res:Response) => {
    try{
       const getProfile = new GetProfileUC(
          new UserDataBase(),
          new JwtImplementation() 
       )

       const result = await getProfile.execute(
           getTokenFromHeaders(req.headers)
       )
       res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            errorMessage: err.message
        })
    }
})

export default app