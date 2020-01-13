import { RegisterUserUC } from './../business/usecases/User/RegisterUser';
import { RegisterUserDataBase } from './../data/RegisterDataBase';
import express, {Request, Response} from 'express'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('createUser', async (req: Request, res: Response) => {
    try{
         
    const userGateway = new RegisterUserDataBase()
    const useCase = new RegisterUserUC(userGateway)

    const newUser = {
        email: req.body.email,
        password: req.body.password
    }

    const result = await useCase.execute(newUser)

    res.send(result)
    }catch{}
});

export default app