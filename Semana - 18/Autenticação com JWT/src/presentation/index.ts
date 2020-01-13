import { RegisterUserUC } from './../business/usecases/User/RegisterUser';
import { RegisterUserDataBase } from './../data/RegisterDataBase';
import express, {Request, Response} from 'express'
import { BcryptImplemantation } from '../services/crypt/bcryptImplematation';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createUser', async (req: Request, res: Response) => {
    console.log()
    try{
        const registerUser = new RegisterUserUC(
            new RegisterUserDataBase(),
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

export default app