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
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsers_1 = require("../business/usecases/user/getAllUsers");
const userDatabase_1 = require("../data/userDatabase");
const signup_1 = require("../business/usecases/user/signup");
const jwtAuthentication_1 = require("../services/auth/jwtAuthentication");
const bcrypt_1 = require("../services/cryptography/bcrypt");
const v4IdGenerator_1 = require("../services/auth/v4IdGenerator");
const login_1 = require("../business/usecases/user/login");
const matches_1 = require("../business/usecases/user/matches");
const changePassword_1 = require("../business/usecases/user/changePassword");
const unmatch_1 = require("../business/usecases/user/unmatch");
const getAllMatches_1 = require("../business/usecases/user/getAllMatches");
class ApiRouter {
    static handleRoute(path, event) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (path) {
                case "getAllUsers":
                    const getAllUsersUC = new getAllUsers_1.GetAllUsersUC(new userDatabase_1.UserDataBase());
                    const resultGetAllUsers = yield getAllUsersUC.execute();
                    return resultGetAllUsers;
                case "createUser":
                    const createUserUC = new signup_1.SignupUC(new userDatabase_1.UserDataBase(), new jwtAuthentication_1.JwtAuthService(), new bcrypt_1.BcryptService(), new v4IdGenerator_1.V4IdGenerator());
                    const resultSignup = yield createUserUC.execute({
                        name: event.body.name,
                        email: event.body.email,
                        birthday: event.body.birthday,
                        age: event.body.age,
                        photo: event.body.photo,
                        password: event.body.password
                    });
                    return resultSignup;
                case "login":
                    const loginUC = new login_1.LoginUC(new userDatabase_1.UserDataBase(), new jwtAuthentication_1.JwtAuthService(), new bcrypt_1.BcryptService());
                    const resultLogin = yield loginUC.execute(event.body.email, event.body.password);
                    return resultLogin;
                case "match":
                    const authService = new jwtAuthentication_1.JwtAuthService();
                    const userId = authService.getUserIdFromToken(this.getTokenFromHeaders(event.headers));
                    const matchUC = new matches_1.MatchesUC(new userDatabase_1.UserDataBase(), new userDatabase_1.UserDataBase(), new userDatabase_1.UserDataBase());
                    const input = {
                        userToMatch: event.body.userToMatchId,
                        userId: userId
                    };
                    const resultMatch = yield matchUC.execute(input);
                    return resultMatch;
                case "changePassword":
                    const changePasswordUC = new changePassword_1.ChangeUserPasswordUC(new jwtAuthentication_1.JwtAuthService(), new userDatabase_1.UserDataBase(), new bcrypt_1.BcryptService(), new userDatabase_1.UserDataBase());
                    const resultChangePassword = yield changePasswordUC.execute({
                        token: this.getTokenFromHeaders(event.headers),
                        oldPassword: event.body.oldPassword,
                        newPassword: event.body.newPassword
                    });
                    return resultChangePassword;
                case "unmatch":
                    const authServiceUnmatch = new jwtAuthentication_1.JwtAuthService();
                    const userIdUnmatch = authServiceUnmatch.getUserIdFromToken(this.getTokenFromHeaders(event.headers));
                    const unfollow = new unmatch_1.UnmatchUserUC(new userDatabase_1.UserDataBase());
                    const inputUnmatch = {
                        userId: userIdUnmatch,
                        userToUnmatch: event.body.userToUnmatch
                    };
                    const resultUnmatch = yield unfollow.execute(inputUnmatch);
                    return resultUnmatch;
                case "getAllMatches":
                    const authServiceGetMatches = new jwtAuthentication_1.JwtAuthService();
                    const userIdGetMatches = authServiceGetMatches.getUserIdFromToken(this.getTokenFromHeaders(event.headers));
                    const inputGetMatches = {
                        userId: userIdGetMatches
                    };
                    const getAllMatchesUC = new getAllMatches_1.GetAllMatches(new userDatabase_1.UserDataBase());
                    const resultGetAllMatches = yield getAllMatchesUC.execute(inputGetMatches);
                    return resultGetAllMatches;
                default:
                    throw new Error("Rota não existe");
            }
        });
    }
}
exports.ApiRouter = ApiRouter;
ApiRouter.getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
