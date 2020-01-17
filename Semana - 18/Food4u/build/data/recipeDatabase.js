"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class RecipeDataBase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'caio',
                password: '6ac0e893475514c1449c7bf672657293',
                database: 'caio'
            }
        });
    }
    createRecipe(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`INSERT INTO recipe (title, description, userId) 
        VALUES (${recipe.getTitle()},${recipe.getDescription()},${recipe.getUserId()})`);
            return recipe;
        });
    }
}
exports.RecipeDataBase = RecipeDataBase;
