import { GetAllUsersUC } from './../business/usecases/User/getAllUsers';
import { CreateRecipeInput } from './../business/usecases/Recipes/createRecipe';
import { RecipeDataBase } from './../data/recipeDatabase';
import { JwtImplementation } from './../services/jwt/jwtimplementantion';
import { LoginUC } from './../business/usecases/Auth/login';
import { RegisterUserUC } from '../business/usecases/User/registerUser';
import { UserDataBase } from '../data/userDataBase';
import express, {Request, Response} from 'express'
import { BcryptImplemantation } from '../services/crypt/bcryptImplematation';
import { CreateRecipeUC } from '../business/usecases/Recipes/createRecipe';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    console.log(headers)
   return(headers['auth'] as string || '');
}

app.post('/signup', async (req: Request, res: Response) => {
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
        console.log(result)
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            errorMessage: err.message
        })
    }
})

app.post('/recipes', async (req: Request, res: Response) => {
    try{
        const authService = new JwtImplementation()
        const userId = authService.getUserIDfromToken(getTokenFromHeaders(req.headers))
        console.log("USER ID", userId)
        const useCase = new CreateRecipeUC(
           new UserDataBase(),
           new RecipeDataBase()
       )

        const input: CreateRecipeInput = {
            title: req.body.title,
            description: req.body.description,
            userId 
        }
        console.log(input)
       const result = await useCase.execute(input)
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            errorMessage: err.message
        })
    }

    app.get("/allUsers", async (req: Request, res: Response) => {
        try {
            const getAllUsersUC = new GetAllUsersUC(new UserDataBase());
            const result = await getAllUsersUC.execute();
            console.log(result)
            res.status(200).send(result)
        }catch(err){
            res.status(400).send({
                errorMessage: err.message
            })
        }
    })

});


export default app