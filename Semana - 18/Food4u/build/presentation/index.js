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
const jwtimplementantion_1 = require("./../services/jwt/jwtimplementantion");
const login_1 = require("./../business/usecases/Auth/login");
const registerUser_1 = require("../business/usecases/User/registerUser");
const userDataBase_1 = require("../data/userDataBase");
const express_1 = __importDefault(require("express"));
const bcryptImplematation_1 = require("../services/crypt/bcryptImplematation");
const getProfile_1 = require("../business/usecases/User/getProfile");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const getTokenFromHeaders = (headers) => {
    return (headers['auth'] || '');
};
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    try {
        const registerUser = new registerUser_1.RegisterUserUC(new userDataBase_1.UserDataBase(), new bcryptImplematation_1.BcryptImplemantation());
        const result = yield registerUser.execute({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password_user: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUC = new login_1.LoginUC(new userDataBase_1.UserDataBase(), new bcryptImplematation_1.BcryptImplemantation(), new jwtimplementantion_1.JwtImplementation());
        const result = yield loginUC.execute(req.body.email, req.body.password);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.get('/getProfile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getProfile = new getProfile_1.GetProfileUC(new userDataBase_1.UserDataBase(), new jwtimplementantion_1.JwtImplementation());
        const result = yield getProfile.execute(getTokenFromHeaders(req.headers));
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.post('/recipes', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const authService = new jwtimplementantion_1.JwtImplementation();
        const userId = authService.getUserIDfromToken(getTokenFromHeaders(req.headers));
        const useCase = new createRecipe_1.CreateRecipeUC(new userDataBase_1.UserDataBase(), new recipeDatabase_1.RecipeDataBase());
        const input = {
            title: req.body.title,
            description: req.body.description,
            userId
        };
        console.log(input);
        const result = yield useCase.execute(input);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
exports.default = app;
