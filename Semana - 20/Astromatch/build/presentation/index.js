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
const express_1 = __importDefault(require("express"));
const signup_1 = require("../business/usecases/user/signup");
const userDatabase_1 = require("../data/userDatabase");
const v4IdGenerator_1 = require("../services/auth/v4IdGenerator");
const bcrypt_1 = require("../services/cryptography/bcrypt");
const jwtAuthentication_1 = require("../services/auth/jwtAuthentication");
const login_1 = require("../business/usecases/user/login");
const changePassword_1 = require("../business/usecases/user/changePassword");
const getAllUsers_1 = require("../business/usecases/user/getAllUsers");
const matches_1 = require("../business/usecases/user/matches");
const unmatch_1 = require("../business/usecases/user/unmatch");
const getAllMatches_1 = require("../business/usecases/user/getAllMatches");
const router_1 = require("./router");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
exports.default = app;
const getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const handleRouteApi = yield router_1.ApiRouter.handleRoute(req.params.route, req);
        const response = {
            handleRouteApi
        };
        const signup = new signup_1.SignupUC(new userDatabase_1.UserDataBase(), new jwtAuthentication_1.JwtAuthService(), new bcrypt_1.BcryptService(), new v4IdGenerator_1.V4IdGenerator());
        const result = yield signup.execute({
            name: req.body.name,
            email: req.body.email,
            birthday: req.body.birthday,
            age: req.body.age,
            photo: req.body.photo,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const login = new login_1.LoginUC(new userDatabase_1.UserDataBase(), new jwtAuthentication_1.JwtAuthService(), new bcrypt_1.BcryptService());
        const result = yield login.execute(req.body.email, req.body.password);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const changePasswordUC = new changePassword_1.ChangeUserPasswordUC(new jwtAuthentication_1.JwtAuthService(), new userDatabase_1.UserDataBase(), new bcrypt_1.BcryptService(), new userDatabase_1.UserDataBase());
        const result = yield changePasswordUC.execute({
            token: getTokenFromHeaders(req.headers),
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authService = new jwtAuthentication_1.JwtAuthService();
        const userId = authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
        const follow = new matches_1.MatchesUC(new userDatabase_1.UserDataBase(), new userDatabase_1.UserDataBase(), new userDatabase_1.UserDataBase());
        const input = {
            userToMatch: req.body.userToMatchId,
            userId: userId
        };
        const result = yield follow.execute(input);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
app.post("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authService = new jwtAuthentication_1.JwtAuthService();
        const userId = authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
        const unfollow = new unmatch_1.UnmatchUserUC(new userDatabase_1.UserDataBase());
        const input = {
            userId: userId,
            userToUnmatch: req.body.userToUnmatch
        };
        const result = yield unfollow.execute(input);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
app.get("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUsersUC = new getAllUsers_1.GetAllUsersUC(new userDatabase_1.UserDataBase());
        const result = yield getAllUsersUC.execute();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
app.get("/:route", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authService = new jwtAuthentication_1.JwtAuthService();
        const userId = authService.getUserIdFromToken(getTokenFromHeaders(req.headers));
        const input = {
            userId
        };
        const getAllMatchesUC = new getAllMatches_1.GetAllMatches(new userDatabase_1.UserDataBase());
        const result = yield getAllMatchesUC.execute(input);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(404).send(Object.assign(Object.assign({}, err), { errorMessage: err.message }));
    }
}));
