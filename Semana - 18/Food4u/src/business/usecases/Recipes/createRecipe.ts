import { UserGateway } from "../../gateways/User/userGateway";
import { Recipe } from "../../entities/Recipe";
import { RecipeGateway } from "../../gateways/Recipes/recipeGateway";

export class CreateRecipeUC {
    constructor(
        private userGateway: UserGateway,
        private recipeGateway: RecipeGateway
    ){}

   async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {
       this.validateInput(input)

       await this.verifyUserExists(input.userId)

       const createdRecipe = await this.createRecipe(input)

       return {
           title: createdRecipe.getTitle(),
           description: createdRecipe.getDescription(),
           userId: createdRecipe.getUserId(),
           createdDate: createdRecipe.getCreationDate()
       }
    }

    validateInput(input: CreateRecipeInput){
        if(!(input.title && input.description && input.userId)) {
            throw new Error('Missing information!')
        }
    }

   async verifyUserExists(userId: string) {
        const userExists = await this.userGateway.verifyUserExists(userId)

        if(!userExists) {
            throw new Error('User not found')
        }
    }

    createRecipe(input: CreateRecipeInput) {
        const newRecipe = new Recipe(input.title, input.description, input.userId)

        return this.recipeGateway.createRecipe(newRecipe)
    }
}

interface CreateRecipeInput  {
    title: string
    description: string
    userId: string
}

interface CreateRecipeOutput  {
    title: string
    description: string
    userId: string
    createdDate: Date
}
