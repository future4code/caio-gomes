"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterUser_1 = require("./../business/usecases/User/RegisterUser");
const RegisterDataBase_1 = require("./../data/RegisterDataBase");
const express_1 = __importDefault(require("express"));
const bcryptImplematation_1 = require("../services/crypt/bcryptImplematation");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registerUser = new RegisterUser_1.RegisterUserUC(new RegisterDataBase_1.RegisterUserDataBase(), new bcryptImplematation_1.BcryptImplemantation());
        const result = yield registerUser.execute({
            email: req.body.email,
            password: req.body.password
        });
        console.log(result);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
exports.default = app;
