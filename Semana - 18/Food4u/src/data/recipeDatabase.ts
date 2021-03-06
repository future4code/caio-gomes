import knex from 'knex';
import { RecipeGateway } from "../business/gateways/Recipes/recipeGateway";
import { Recipe } from '../business/entities/Recipe';


export class RecipeDataBase implements RecipeGateway {
      private connection : knex

      constructor() {
          this.connection = knex({
              client: 'mysql',
              connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'caio',
                password: '6ac0e893475514c1449c7bf672657293',
                database: 'caio'
              }
          });
  }

   async createRecipe(recipe: Recipe): Promise<Recipe> {
    await this.connection.raw(
        `INSERT INTO recipe (title, description, userId) 
        VALUES (
            "${recipe.getTitle()}","${recipe.getDescription()}","${recipe.getUserId()}")`)
        
            return recipe;
    }
} 