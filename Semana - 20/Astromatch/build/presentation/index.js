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
const express_1 = __importDefault(require("express"));
const signup_1 = require("../business/usecases/user/signup");
const userDatabase_1 = require("../data/userDatabase");
const v4IdGenerator_1 = require("../services/auth/v4IdGenerator");
const bcrypt_1 = require("../services/cryptography/bcrypt");
const jwtAuthentication_1 = require("../services/auth/jwtAuthentication");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
exports.default = app;
const getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
app.post("/signup", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const signup = new signup_1.SignupUC(new userDatabase_1.UserDataBase(), new jwtAuthentication_1.JwtAuthService(), new bcrypt_1.BcryptService(), new v4IdGenerator_1.V4IdGenerator());
        const result = yield signup.execute({
            name: req.body.name,
            email: req.body.email,
            birthday: req.body.birthday,
            photo: req.body.photo,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign({}, err, { errorMessage: err.message }));
    }
}));
